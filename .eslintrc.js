module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'react-app',
    'plugin:react/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: require('./tsconfig.json').exclude,
  rules: {
    'prefer-const': 'warn',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-constant-condition': ['error', { checkLoops: false }],
    'require-await': 'off',
    '@typescript-eslint/require-await': 'warn',
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': ['warn'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/display-name': 'off',
    'import/no-anonymous-default-export': 'off',
  },
};
