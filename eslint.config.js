import js from "@eslint/js";
import prettier from "eslint-config-prettier";

export default [
  // Ignore folders
  {
    ignores: ["node_modules", "dist", "build"],
  },

  // ESLint recommended rules
  js.configs.recommended,

  // Disable rules that conflict with Prettier
  prettier,

  // Your project rules
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
    },
  },
];
