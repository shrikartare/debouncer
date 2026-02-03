import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import jest from "eslint-plugin-jest";
import globals from "globals";

// Use recommended configs to get standard globals (Node, browser, timers, etc.)
export default [
  {
    ignores: ["node_modules", "dist", "build"],
  },
  js.configs.recommended,
  prettier,
  {
    files: ["**/*.{js,jsx}"],
    plugins: { jest },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      // Node and browser timers like setTimeout/setInterval are included by js.configs.recommended
      globals: {
        ...globals.browser,
				...globals.node,
        ...jest.environments.globals.globals, // Jest globals
        // No need to manually add setTimeout, setInterval, clearTimeout, clearInterval, etc.
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
    },
  },
];