import SwiftUI

struct Conversation: Identifiable, Codable {
    let id: UUID
    var title: String
    var messages: [Message]
    var lastUpdated: Date

    init(id: UUID = UUID(), title: String, messages: [Message], lastUpdated: Date = .now) {
        self.id = id
        self.title = title
        self.messages = messages
        self.lastUpdated = lastUpdated
    }
}

struct ConversationsView: View {
    @StateObject private var store = ConversationsStore()
    @State private var selectedConversation: Conversation? = nil
    @State private var showChat = false

    var body: some View {
        NavigationStack {
            VStack(spacing: 0) {
                HStack {
                    Text("Conversations")
                        .font(.title2.bold())
                        .foregroundColor(.white)
                    Spacer()
                    Button {
                        let formatter = DateFormatter()
                        formatter.dateStyle = .medium
                        formatter.timeStyle = .short
                        let timestamp = formatter.string(from: Date())

                        let new = Conversation(title: timestamp, messages: [])
                        store.addConversation(new)
                        selectedConversation = new
                        showChat = true
                    } label: {
                        Image(systemName: "plus")
                            .font(.title2.weight(.bold))
                            .foregroundColor(.blue)
                    }
                }
                .padding()
                .background(Color.black)
                .overlay(Divider().background(Color.gray.opacity(0.3)), alignment: .bottom)

                List {
                    ForEach(store.conversations) { convo in
                        Button {
                            selectedConversation = convo
                            showChat = true
                        } label: {
                            VStack(alignment: .leading, spacing: 4) {
                                Text(convo.title)
                                    .font(.headline)
                                    .foregroundColor(.white)
                                if convo.messages.isEmpty {
                                    Text("No Messages Yet")
                                        .font(.caption)
                                        .foregroundColor(.gray)
                                } else if let last = convo.messages.last {
                                    switch last.type {
                                    case let .text(text):
                                        Text(text)
                                            .lineLimit(1)
                                            .font(.caption)
                                            .foregroundColor(.gray)
                                    case .loading:
                                        Text("Typing...")
                                            .font(.caption)
                                            .foregroundColor(.gray)
                                    }
                                }
                            }
                            .padding(.vertical, 8)
                        }
                        .listRowBackground(Color.black)
                    }.onDelete(perform: deleteConversation)
                }
                .listStyle(.plain)
                .scrollContentBackground(.hidden)
                .background(Color.black)
            }
            .navigationDestination(isPresented: $showChat) {
                if let index = store.conversations.firstIndex(where: { $0.id == selectedConversation?.id }) {
                    ChatView(conversation: $store.conversations[index], store: store)
                } else {
                    Text("Chat not found.").foregroundColor(.white)
                }
            }
        }
        .background(Color.black.ignoresSafeArea())
    }

    private func deleteConversation(at offsets: IndexSet) {
        store.conversations.remove(atOffsets: offsets)
    }
}

#Preview {
    NavigationStack {
        ConversationsView()
    }
}
