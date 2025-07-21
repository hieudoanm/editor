//
//  ChatView.swift
//  ios
//
//  Created by Hieu Doan on 26/6/25.
//

import SwiftUI
import UIKit

enum MessageType: Codable {
    case text(String)
    case loading

    enum CodingKeys: String, CodingKey {
        case type, text
    }

    enum MessageTypeKind: String, Codable {
        case text, loading
    }

    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let kind = try container.decode(MessageTypeKind.self, forKey: .type)
        switch kind {
        case .text:
            let text = try container.decode(String.self, forKey: .text)
            self = .text(text)
        case .loading:
            self = .loading
        }
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        switch self {
        case let .text(text):
            try container.encode(MessageTypeKind.text, forKey: .type)
            try container.encode(text, forKey: .text)
        case .loading:
            try container.encode(MessageTypeKind.loading, forKey: .type)
        }
    }
}

struct Message: Identifiable, Codable {
    var id: UUID = .init() // ✅ Default UUID so you don't have to specify it
    var type: MessageType
    var isUser: Bool
    var modelLabel: String
}

struct Model: Identifiable {
    let id = UUID()
    let label: String
    let value: String
}

struct ChatView: View {
    @Binding var conversation: Conversation
    @ObservedObject var store: ConversationsStore
    @Environment(\.presentationMode) private var presentationMode
    // Input
    @State private var isSending = false
    @FocusState private var isInputFocused: Bool
    @State private var inputText = ""
    // Messages
    @State private var showCopiedToast = false
    @State private var selectedMessageID: UUID? = nil
    // Model
    @State private var model = "gemini-2.5-flash"
    private let models: [String: [Model]] = [
        "Deepseek": [
            Model(label: "DeepSeek R1", value: "deepseek/deepseek-r1:free"),
            Model(label: "DeepSeek V3", value: "deepseek/deepseek-v3:free"),
        ],
        "Google Gemini": [
            Model(label: "Gemini 2.5 Flash", value: "gemini-2.5-flash"),
            Model(label: "Gemini 2.0 Flash", value: "gemini-2.0-flash"),
            Model(label: "Gemini 2.0 Flash Lite", value: "gemini-2.0-flash-lite"),
            Model(label: "Gemini 1.5 Flash", value: "gemini-1.5-flash"),
            Model(label: "Gemini 1.5 Flash 8B", value: "gemini-1.5-flash-8b"),
        ],
        "Google Gemma": [
            Model(label: "Gemma 3 27B IT", value: "google/gemma-3-27b-it:free"),
            Model(label: "Gemma 3 12B IT", value: "google/gemma-3-12b-it:free"),
            Model(label: "Gemma 3 4B IT", value: "google/gemma-3-4b-it:free"),
            Model(label: "Gemma 3n 4B IT", value: "google/gemma-3n-e4b-it:free"),
            Model(label: "Gemma 2 9B IT", value: "google/gemma-2-9b-it:free"),
        ],
        "Meta": [
            Model(label: "LLaMA 4 Maverick", value: "meta-llama/llama-4-maverick:free"),
            Model(label: "LLaMA 4 Scout", value: "meta-llama/llama-4-scout:free"),
            Model(label: "LLaMA 3.3 70B Instruct", value: "meta-llama/llama-3.3-70b-instruct:free"),
            Model(label: "LLaMA 3.2 11B Vision Instruct", value: "meta-llama/llama-3.2-11b-vision-instruct:free"),
            Model(label: "LLaMA 3.3 8B Instruct", value: "meta-llama/llama-3.3-8b-instruct:free"),
            Model(label: "LLaMA 3.3 1B Instruct", value: "meta-llama/llama-3.3-1b-instruct:free"),
        ],
        "Microsoft": [
            Model(label: "MAI DeepSeek R1", value: "microsoft/mai-ds-r1:free"),
        ],
        "Nvidia": [
            Model(label: "LLaMA 3.3 Nemotron Super 49B", value: "nvidia/llama-3.3-nemotron-super-49b-v1:free"),
            Model(label: "LLaMA 3.1 Nemotron Ultra 253B", value: "nvidia/llama-3.1-nemotron-ultra-253b-v1:free"),
        ],
    ]
    private var allModels: [Model] {
        models.values.flatMap(\.self)
    }

    var body: some View {
        VStack(spacing: 0) {
            // Top Bar
            HStack(spacing: 12) {
                // 🔙 Back Button
                Button(action: {
                    // Dismiss this view (works if ChatView is inside a NavigationStack)
                    // Use .presentationMode or use NavigationStack programmatically
                    // For a clean solution, use @Environment:
                    presentationMode.wrappedValue.dismiss()
                }) {
                    Image(systemName: "chevron.left")
                        .font(.title2.weight(.bold))
                        .foregroundColor(.blue)
                }
                // Space
                Spacer()
                // 🧠 Model Picker
                HStack(spacing: 6) {
                    Picker("Model", selection: $model) {
                        ForEach(models.keys.sorted(), id: \.self) { vendor in
                            Section(header: Text(vendor)) {
                                ForEach(models[vendor]!) { model in
                                    Text(model.label).tag(model.value)
                                }
                            }
                        }
                    }
                    .font(.title2.weight(.bold))
                    .pickerStyle(.menu)
                }
                // Space
                Spacer()
                // 🗑️ Clear Chat
                Button(action: {
                    conversation.messages.removeAll()
                    conversation.lastUpdated = .now
                    store.save()
                }) {
                    Image(systemName: "trash")
                        .font(.title2.weight(.bold))
                        .foregroundColor(.red)
                }
            }
            .padding(.horizontal)
            .padding(.vertical, 10)
            .background(Color(white: 0.05))
            .overlay(
                Divider()
                    .background(Color.gray.opacity(0.3)),
                alignment: .bottom,
            )
            // Chat ScrollView
            ScrollViewReader { proxy in
                ScrollView {
                    if conversation.messages.isEmpty {
                        VStack {
                            Text("No messages yet.\nStart the conversation with 20 free AI Models")
                                .multilineTextAlignment(.center)
                                .foregroundColor(.gray)
                                .font(.system(size: 16))
                                .padding()
                        }
                        .frame(maxWidth: .infinity, maxHeight: .infinity)
                        .frame(minHeight: 300) // Optional: helps on small screens
                    } else {
                        LazyVStack(spacing: 10) {
                            ForEach(conversation.messages) { message in
                                VStack(alignment: message.isUser ? .trailing : .leading, spacing: 4) {
                                    HStack(spacing: 4) {
                                        Image(systemName: message.isUser ? "person.crop.circle.fill" : "brain")
                                            .foregroundColor(message.isUser ? .gray : .blue)
                                            .font(.caption)
                                        Text(message.modelLabel)
                                            .font(.caption2)
                                            .foregroundColor(.gray)
                                    }

                                    HStack {
                                        if message.isUser {
                                            Spacer()
                                            messageView(for: message)
                                                .transition(.move(edge: .bottom).combined(with: .opacity))
                                                .onTapGesture {
                                                    selectedMessageID = selectedMessageID == message.id ? nil : message.id
                                                }
                                        } else {
                                            messageView(for: message)
                                                .transition(.move(edge: .bottom).combined(with: .opacity))
                                                .onTapGesture {
                                                    selectedMessageID = selectedMessageID == message.id ? nil : message.id
                                                }
                                            Spacer()
                                        }
                                    }

                                    // ✅ Timestamp shown only when tapped
                                    if selectedMessageID == message.id {
                                        Text(Date(), style: .time) // or your own timestamp if stored
                                            .font(.caption2)
                                            .foregroundColor(.gray)
                                            .transition(.opacity)
                                            .animation(.easeInOut(duration: 0.2), value: selectedMessageID)
                                            .padding(message.isUser ? .trailing : .leading)
                                    }
                                }
                                .padding(.horizontal)
                                .id(message.id)
                            }
                        }
                        .padding(.top, 10)
                    }
                }
                .onChange(of: conversation.messages.count) {
                    if let last = conversation.messages.last {
                        withAnimation(.easeOut(duration: 0.2)) {
                            proxy.scrollTo(last.id, anchor: .bottom)
                        }
                    }
                }
            }

            // Input Field
            HStack(spacing: 8) {
                ZStack(alignment: .leading) {
                    if inputText.isEmpty {
                        Text("Ask anything...")
                            .foregroundColor(.gray)
                            .padding(.leading, 20)
                    }
                    TextField("", text: $inputText)
                        .focused($isInputFocused)
                        .padding(.horizontal, 14)
                        .padding(.vertical, 10)
                        .foregroundColor(.white)
                }
                .background(Color(white: 0.15))
                .clipShape(Capsule())

                Button(action: sendMessage) {
                    Group {
                        if isSending {
                            ProgressView()
                                .progressViewStyle(CircularProgressViewStyle(tint: .white))
                                .scaleEffect(0.75)
                        } else {
                            Image(systemName: "paperplane.fill")
                                .font(.system(size: 16, weight: .bold))
                        }
                    }
                    .padding(10)
                    .background(inputText.isEmpty || isSending ? Color.gray : Color.blue)
                    .clipShape(Circle())
                    .foregroundColor(.white)
                }
                .disabled(inputText.isEmpty || isSending)
            }
            .padding(.horizontal)
            .padding(.vertical, 10)
            .background(Color(white: 0.05))
        }
        .overlay(
            Group {
                if showCopiedToast {
                    Text("Copied!")
                        .font(.caption)
                        .padding(.horizontal, 12)
                        .padding(.vertical, 6)
                        .background(Color.white.opacity(0.8))
                        .foregroundColor(.black)
                        .cornerRadius(12)
                        .transition(.opacity)
                        .onAppear {
                            DispatchQueue.main.asyncAfter(deadline: .now() + 1.2) {
                                withAnimation {
                                    showCopiedToast = false
                                }
                            }
                        }
                }
            },
            alignment: .top,
        )
        .background(Color.black.ignoresSafeArea())
        .navigationBarBackButtonHidden(true)
    }

    @ViewBuilder
    private func messageView(for message: Message) -> some View {
        switch message.type {
        case let .text(rawText):
            // Split message into individual lines
            let lines = rawText.components(separatedBy: .newlines)

            VStack(alignment: .leading, spacing: 4) {
                ForEach(lines, id: \.self) { line in
                    if let attributed = try? AttributedString(markdown: line) {
                        Text(attributed)
                            .font(.system(size: 15))
                            .multilineTextAlignment(.leading)
                            .fixedSize(horizontal: false, vertical: true)
                    } else {
                        // Fallback for invalid markdown
                        Text(line)
                            .font(.system(size: 15))
                            .multilineTextAlignment(.leading)
                            .frame(maxWidth: .infinity, alignment: .leading)
                    }
                }
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 10)
            .background(message.isUser ? Color(white: 0.2) : Color.blue.opacity(0.9))
            .foregroundColor(.white)
            .cornerRadius(20)
            .shadow(color: Color.black.opacity(0.1), radius: 2, x: 0, y: 1)
            .frame(
                maxWidth: UIScreen.main.bounds.width * 0.75,
                alignment: message.isUser ? .trailing : .leading,
            )
            .onTapGesture {
                UIPasteboard.general.string = rawText
                showCopiedToast = true
            }

        case .loading:
            TypingBubble()
        }
    }

    private func sendMessage() {
        let userText = inputText.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !userText.isEmpty else { return }

        let modelLabel = allModels.first(where: { $0.value == model })?.label ?? model
        let userMessage = Message(type: .text(userText), isUser: true, modelLabel: modelLabel)
        withAnimation {
            conversation.messages.append(userMessage)
            conversation.lastUpdated = .now
            store.save()
        }

        // Reset Input
        inputText = ""
        isSending = true
        isInputFocused = false

        let loadingMessage = Message(type: .loading, isUser: false, modelLabel: modelLabel)
        withAnimation {
            conversation.messages.append(loadingMessage)
        }

        let apiMessages: [MessageBody] = conversation.messages.compactMap { message in
            switch message.type {
            case let .text(text):
                .init(role: message.isUser ? "user" : "ai", text: text)
            case .loading:
                nil
            }
        } + [MessageBody(role: "user", text: userText)]

        generateResponse(model: model, messages: apiMessages) { output in
            DispatchQueue.main.async {
                withAnimation {
                    conversation.messages.removeAll { $0.id == loadingMessage.id }
                    let aiMessage = Message(type: .text(output), isUser: false, modelLabel: modelLabel)
                    conversation.messages.append(aiMessage)
                    conversation.lastUpdated = .now
                    store.save()
                }
                isSending = false
            }
        }
    }
}
