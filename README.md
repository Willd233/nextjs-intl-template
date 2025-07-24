# 🌍 Next.js Intl Template

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![next-intl](https://img.shields.io/badge/next--intl-blueviolet?style=for-the-badge&logo=vercel&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

A basic Next.js template configured for **internationalization (i18n)** using `next-intl`. This project provides a solid foundation for building multi-language applications with ease, managing translations, user language preferences, and applying styles with Sass and the Geist font.

---

## 🚀 Features

- **Next.js 14+**: Leverages the App Router for a modern, scalable architecture.
- **next-intl**: A robust and efficient solution for internationalization.
- **English/Spanish Translations**: Pre-configured with `JSON` files for `en` and `es`.
- **Cookie-based Language Management**: Persists user language preferences.
- **Server Components & Client Components**: Hybrid component usage for optimized performance.
- **Sass/SCSS**: For advanced styling and modularity.
- **Geist Font**: Integration of the Geist font for modern typography.
- **Conventional Commits**: Guides for a clear and semantic commit history.

---

## 🛠️ Technologies Used

- [**Next.js**](https://nextjs.org/)
- [**React**](https://react.dev/)
- [**TypeScript**](https://www.typescriptlang.org/)
- [**next-intl**](https://next-intl-docs.vercel.app/)
- [**Sass**](https://sass-lang.com/)
- [**Geist Font**](https://vercel.com/font)

---

## 📦 Installation

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

- Node.js (version 18.x or higher)
- npm or Yarn

### Steps

1.  **Clone the repository:**

    ```bash
    git clone git@github.com:Willd233/nextjs-intl-template.git
    cd nextjs-intl-template
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## ⚙️ Internationalization Configuration

The project is pre-configured for English (`en`) and Spanish (`es`).

### Key File Structure

```
nextjs-intl-template/
├── .next/ # Next.js build output (automatically generated)
├── node_modules/ # Project dependencies (automatically generated)
├── public/ # Static assets (images, fonts, etc.)
├── src/ # Main application source code
│ ├── app/ # Next.js App Router pages and layouts
│ ├── components/ # Reusable React components
│ ├── global/ # Global assets and styles
│ │ └── styles/
│ │ └── globals.scss # Global SCSS styles
│ ├── i18n/ # Internationalization (i18n) logic
│ │ ├── locales.ts # Functions for handling language cookies
│ │ └── request.ts # next-intl configuration for server requests
│ └── lang/ # Translation files
│ ├── en.json # English translations
│ └── es.json # Spanish translations
├── .gitignore # Files/folders ignored by Git
├── eslint.config.mjs # ESLint configuration
├── next-env.d.ts # TypeScript definitions for Next.js environment
├── next.config.ts # Next.js configuration file
├── package-lock.json # Tracks exact dependency versions
├── package.json # Project metadata and scripts
├── README.md # Project documentation (this file!)
└── tsconfig.json # TypeScript configuration
```

### How It Works

1.  **`next.config.ts`**: Wraps the Next.js configuration with the `next-intl` plugin to enable internationalization.
2.  **`i18n/locales.ts`**: Contains server-side functions (`getUserLocale`, `setUserLocale`) to read and write the user's language preference to a cookie, ensuring persistence.
3.  **`i18n/request.ts`**: Uses `next-intl/server` to detect the request's language (based on the cookie or default language) and dynamically loads the corresponding translation JSON file from the `lang/` folder.
4.  **`app/layout.tsx`**: The root application layout wraps everything with `NextIntlClientProvider`. This makes translation messages and the current locale available to all components within the application.
5.  **`lang/*.json`**: Stores your translated texts. Ensure that **translation keys are identical** across all language files for correct functionality.
    ```json
    // es.json
    {
      "Page": {
        "Home": {
          "Title": "¡Hola, Mundo!"
        }
      }
    }
    ```
6.  **Usage in Components**:

    - **Client Components (`"use client"`):** Use the `useTranslations` hook from `next-intl` to access translation messages.

      ```typescript
      // app/page.tsx
      "use client";
      import { useTranslations } from "next-intl";
      import { setUserLocale } from "@/i18n/locales";

      export default function Home() {
        const t = useTranslations("Page.Home"); // Loads translations for the "Page.Home" scope
        // ...
        return <h1>{t("Title")}</h1>; // Access text using the key
      }
      ```

    - **Language Switching**: The example includes a button to toggle between English and Spanish, which updates the language cookie and reloads the page to apply the change.

---

## ⌨️ Contributing

Contributions are welcome! If you find a bug, have a suggestion, or want to add a new feature, please open an issue or submit a pull request.

To maintain a clear and semantic commit history, it's recommended to follow the [**Conventional Commits**](https://www.conventionalcommits.org/en/v1.0.0/) guidelines.

### Commit Examples:

- `feat(auth): add user login feature` (New feature)
- `fix(bug): correct invalid input validation` (Bug fix)
- `refactor(i18n): 🛠️ Complete internationalization configuration refactor` (Code structure change)
- `docs(readme): update installation instructions` (Documentation changes)
- `chore(deps): update next-intl to latest version` (General maintenance, no app code changes)

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## ✉️ Contact

If you have any questions or comments, feel free to reach out at [emiliod255@gmail.com]
