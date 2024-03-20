//
//  ContentView.swift
//  wavingcity
//
//  Created by 김주성 on 3/9/24.
//

import SwiftUI

struct ContentView: View {
    @Binding var document: wavingcityDocument

    var body: some View {
        TextEditor(text: $document.text)
    }
}

#Preview {
    ContentView(document: .constant(wavingcityDocument()))
}
