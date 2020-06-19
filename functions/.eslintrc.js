module.exports = {
//   defaultSeverity: 'error',
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    // "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
    "prettier/@typescript-eslint",
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'eslint-comments',
    'jest',
  ],
  rules: {
    "@typescript-eslint/explicit-member-accessibility": ["error", { "accessibility": "no-public" }],
    'quotes': [2, 'single', { avoidEscape: true }],
    "max-len": ['error', { code: 100 }],
  },
  env: {
    'node': true,
    'jest/globals': true,
  },
};