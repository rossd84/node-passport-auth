module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'no-var': 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-multi-spaces': 'error',
    'space-in-parens': ['error', 'always', { "exceptions": ["empty"]}],
    'no-multiple-empty-lines': 'error',
    'prefer-const': 'error',
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'arrow-spacing': { 'before': true, 'after': true }
  },
}