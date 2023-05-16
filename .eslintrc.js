module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  plugins: ['@typescript-eslint', 'react', 'prettier', 'simple-import-sort'],
  settings: {
    react: {
      pragma: 'React',
      version: '18.0',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', './'],
      },
    },
  },
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-console': 'warn',
    'no-eval': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        trailingComma: 'es5',
        semi: true,
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
        'no-unused-vars': ['error'],
      },
    ],
  },
};
