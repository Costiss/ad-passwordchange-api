module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off'
  }
};
//npm i -D prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-hooks
