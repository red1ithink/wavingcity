//
//  wavingcityApp.swift
//  wavingcity
//
//  Created by 김주성 on 3/9/24.
//

import SwiftUI

@main
struct wavingcityApp: App {
    var body: some Scene {
        DocumentGroup(newDocument: wavingcityDocument()) { file in
            ContentView(document: file.$document)
        }
    }
}
