# Kanikonriio

<p align="center">
  <img src="assets/logo.png" alt="Kanikonriio logo" width="160"/>
</p>

> good mind — private, offline note-taking.

Kanikonriio is a note-taking app that runs entirely on your device. Record voice notes, jot down text, generate summaries, and chat with your notes — without an internet connection.

iOS first (Android project included but untested).

## Features

- **Voice + text**: record voice notes and type notes at the same time.
- **Summaries**: generate summaries of long voice memos or text notes.
- **Chat with your notes**: ask questions about your notes with an on-device model.
- **Private**: everything stays on your device; no tracking.

## Getting started

Prerequisites: Node 18+, Xcode 15+, CocoaPods.

```bash
npm install
cd ios && pod install && cd ..
npm run ios
```

## Rebranding

| What | Where |
| --- | --- |
| In-app name, tagline, colors | `theme/brand.ts` |
| App display name, bundle IDs, permission prompts | `app.json` |
| Android name / package | `android/app/src/main/res/values/strings.xml`, `android/app/build.gradle` |
| iOS name / permission text | `ios/Kanikonriio/Info.plist`, `ios/Kanikonriio/LaunchScreen.storyboard` |
| App icons and logo | `ios/Kanikonriio/Images.xcassets/AppIcon.appiconset/1024.png`, `android/app/src/main/res/mipmap-*/`, `assets/logo.png` |

The current icons are placeholders. Regenerate them after changing colors with `python3 scripts/generate_icons.py` (needs `pip install pillow`), or swap in your own artwork.

The bundle identifier is `com.destinyrock.kanikonriio`. Change it before publishing if you want a different one.

## How it works

- Apple Speech Recognition for transcription
- [llama.rn](https://github.com/mybigday/llama.rn) to run the language model on-device
- sqlite-vec for vector search
- BGE embeddings

## Credits

Based on [JotItNow](https://github.com/navedmerchant/JotItNow) by Naved Merchant, used under the MIT License. See `LICENSE.JotItNow`.

## License

MIT. See [LICENSE](LICENSE).
