module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'react',
    'flowtype'
  ],
  env: {
      browser: true
  },
  extends: ["airbnb", "eslint:recommended", "plugin:react/recommended", 'plugin:flowtype/recommended'],
  rules: {
      indent: ["error", 2],
      'react/prop-types': [2],
      'jsx-a11y/anchor-is-valid': [ "error", {
        aspects: [ "noHref", "invalidHref" ]
      }],
      'import/extensions': [2, "never"],
      'react/prefer-stateless-function': [2],
      'no-console': 0,
      'no-unused-vars': 0,
      'no-undef': 0,
      'react/jsx-closing-bracket-location': 0,
      'linebreak-style': 0,
      'semi': 0,
      'comma-dangle': 0
  },
  settings: {
    flowtype: {
      "onlyFilesWithFlowAnnotation": false
    }
  }
};
