//
//  TypingBubble.swift
//  ios
//
//  Created by Hieu Doan on 26/6/25.
//

import SwiftUI

struct TypingBubble: View {
    @State private var animate = false

    var body: some View {
        HStack(spacing: 6) {
            ForEach(0 ..< 3) { i in
                Circle()
                    .frame(width: 8, height: 8)
                    .foregroundColor(.white)
                    .opacity(animate ? 0.2 + Double(i) * 0.2 : 1.0)
                    .scaleEffect(animate ? 0.8 : 1.0)
                    .animation(
                        .easeInOut(duration: 0.6)
                            .repeatForever()
                            .delay(Double(i) * 0.2),
                        value: animate,
                    )
            }
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 16)
        .background(Color.blue)
        .cornerRadius(999)
        .onAppear {
            animate = true
        }
    }
}
