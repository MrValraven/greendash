module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier' // Make sure Prettier is last to disable conflicting ESLint rules
    ],
};