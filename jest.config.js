/** @type {import('jest').Config} */
export default {
  testEnvironment: "node",
  verbose: true,
  moduleFileExtensions: ["js", "json"],
  testMatch: ["**/__tests__/**/*.test.js"],
  transform: {
    "^.+\\.js$": "jest-esbuild"
  }
};