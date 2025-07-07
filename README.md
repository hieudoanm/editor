# 🔄 [Converter](https://hieudoanm.github.io/converter)

A fast, privacy-friendly tool to convert between CSV, JSON, and YAML formats — all directly in your browser.

## 📚 Table of Contents

- [🔄 Converter](#-converter)
  - [📚 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
    - [🔧 1. Clone the repository](#-1-clone-the-repository)
    - [📦 2. Install dependencies](#-2-install-dependencies)
    - [⚙️ 3. Install Tauri CLI (optional)](#️-3-install-tauri-cli-optional)
    - [💻 4. Start the development server](#-4-start-the-development-server)
  - [🧰 Tech Stack](#-tech-stack)
  - [🗂 File Upload \& Conversion](#-file-upload--conversion)
  - [📦 Build for Production](#-build-for-production)
  - [🛠️ Build Desktop App with Tauri](#️-build-desktop-app-with-tauri)
  - [📄 License](#-license)
  - [🙌 Acknowledgements](#-acknowledgements)

## ✨ Features

- 🔄 Convert between CSV, JSON, and YAML
- 🖥️ Fully client-side — runs entirely in the browser
- 📤 Upload files in .csv, .json, or .yaml / .yml formats
- 📥 Download converted results instantly
- 🔒 No server or API usage — 100% privacy guaranteed

### 🔧 1. Clone the repository

```bash
git clone git@github.com:hieudoanm/openapi-to-postmanv2.git
cd openapi-to-postmanv2
```

### 📦 2. Install dependencies

```bash
pnpm install
```

### ⚙️ 3. Install Tauri CLI (optional)

```bash
cargo install tauri-cli
```

You also need to have Rust installed.

### 💻 4. Start the development server

```bash
pnpm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## 🧰 Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- `js-yaml` — for YAML parsing
- [Tauri](https://v2.tauri.app/) — lightweight desktop app framework for Rust + frontend

## 🗂 File Upload & Conversion

- Files are parsed and converted in-browser using js-yaml, JSON.stringify/parse, and papaparse.
- Automatic format detection based on file extension.
- Output can be previewed and downloaded in the selected target format.

## 📦 Build for Production

```bash
pnpm run build
```

Then run:

```bash
pnpm run start
```

## 🛠️ Build Desktop App with Tauri

After installing Tauri CLI and Rust:

```bash
pnpm tauri build
```

This will generate native executables for Windows, macOS, or Linux, depending on your OS.

You can also run the desktop app in development mode:

```bash
pnpm tauri dev
```

## 📄 License

This project is licensed under the **GNU General Public License v3.0**.
You may copy, distribute, and modify the software as long as you track changes/dates in source files.
Any derivative work must also be licensed under GPL-3.0.

See the full license text in the [LICENSE](./LICENSE) file or visit:

[https://www.gnu.org/licenses/gpl-3.0.html](https://www.gnu.org/licenses/gpl-3.0.html)

## 🙌 Acknowledgements

- [js-yaml](https://github.com/nodeca/js-yaml)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tauri](https://v2.tauri.app/)
