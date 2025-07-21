//
//  ConversationsStore.swift
//  ios
//
//  Created by Hieu Doan on 27/6/25.
//

import Foundation

class ConversationsStore: ObservableObject {
    @Published var conversations: [Conversation] = []

    private let key = "savedConversations"

    init() {
        load()
    }

    func load() {
        if let data = UserDefaults.standard.data(forKey: key),
           let decoded = try? JSONDecoder().decode([Conversation].self, from: data)
        {
            conversations = decoded
        }
    }

    func save() {
        if let encoded = try? JSONEncoder().encode(conversations) {
            UserDefaults.standard.set(encoded, forKey: key)
        }
    }

    func addConversation(_ conversation: Conversation) {
        conversations.append(conversation)
        conversations.sort(by: { $0.lastUpdated > $1.lastUpdated })
        save()
    }

    func updateConversation(_ conversation: Conversation) {
        if let index = conversations.firstIndex(where: { $0.id == conversation.id }) {
            var updatedConversation = conversation

            let formatter = DateFormatter()
            formatter.dateStyle = .medium
            formatter.timeStyle = .short
            let timestamp = formatter.string(from: Date())
            updatedConversation.title = timestamp

            conversations[index] = conversation
        }
        conversations.sort(by: { $0.lastUpdated > $1.lastUpdated })
        save()
    }
}
