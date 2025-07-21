//
//  API.swift
//  ios
//
//  Created by Hieu Doan on 26/6/25.
//

import Foundation

// MARK: - Codable Structs

struct MessageBody: Codable {
    let role: String
    let text: String
}

struct RequestBody: Codable {
    let model: String
    let messages: [MessageBody]
}

struct APIResponse: Codable {
    let output: String
}

// MARK: - API Call Function

func generateResponse(
    model: String,
    messages: [MessageBody],
    completion: @escaping (String) -> Void,
) {
    guard let url = URL(string: "https://gaslit.vercel.app/api/generate") else {
        completion("Error: Invalid URL")
        return
    }

    var request = URLRequest(url: url)
    request.httpMethod = "POST"
    request.setValue("application/json", forHTTPHeaderField: "Accept")
    request.setValue("application/json", forHTTPHeaderField: "Content-Type")

    let requestBody = RequestBody(model: model, messages: messages)

    do {
        request.httpBody = try JSONEncoder().encode(requestBody)
    } catch {
        completion("Error: Failed to encode request body")
        return
    }

    URLSession.shared.dataTask(with: request) { data, _, error in
        guard let data, error == nil else {
            completion("Error: Request failed - \(error?.localizedDescription ?? "Unknown")")
            return
        }

        do {
            let apiResponse = try JSONDecoder().decode(APIResponse.self, from: data)
            completion(apiResponse.output)
        } catch {
            completion("Error: Failed to decode response")
        }
    }.resume()
}
