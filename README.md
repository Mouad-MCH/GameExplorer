# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Project Structure 📂

Here is the architecture of our project (React + Vite):

```text
GAMES/
├── node_modules/          # Project dependencies and packages (auto-generated)
├── public/                # Static files (favicon, images) not processed by Vite
├── src/                   # Main source code of the application
│   ├── api/               # API request configurations (e.g., Axios instances, fetch services)
│   ├── assets/            # Static assets used within components (images, fonts, icons)
│   ├── components/        # Reusable React components (Buttons, Headers, etc.)
│   ├── hooks/             # Custom React Hooks (e.g., useAuth, useFetch)
│   ├── pages/             # Components representing complete pages (used for routing)
│   ├── utils/             # Utility functions and helper methods
│   ├── App.css            # Global or App-component specific styles
│   ├── App.jsx            # Root React component of the application
│   ├── index.css          # Main stylesheet (CSS reset, Tailwind imports, etc.)
│   └── main.jsx           # Application entry point (mounts React to the DOM)
├── .env                   # Environment variables (API keys, URLs) - Do not commit to Git
├── .gitignore             # Files and folders ignored by Git
├── eslint.config.js       # ESLint configuration for code linting and formatting rules
├── index.html             # Main HTML template
├── package-lock.json      # Locks the exact versions of installed dependencies
├── package.json           # List of project dependencies, scripts, and metadata
├── README.md              # Project documentation (this file)
└── vite.config.js         # Vite bundler configuration
```
