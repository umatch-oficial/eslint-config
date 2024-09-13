module.exports = {
  env: { es6: true },
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  extends: ['prettier'],
  ignorePatterns: ['node_modules', '*.lock'],
};
