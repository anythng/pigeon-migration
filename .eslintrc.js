module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/warnings',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'eslint-comments'],
  rules: {
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      { accessibility: 'no-public' },
    ],
    quotes: [2, 'single', { avoidEscape: true }],
    'max-len': ['error', { code: 100 }],
    '@typescript-eslint/explicit-function-return-type': ['error'],
  },
  env: {
    node: true,
  },
};
