// eslint-disable-next-line no-undef
module.exports = {
  // env: { browser: true, es2020: true },
  // extends: [
  //   'eslint:recommended',
  //   'plugin:react/recommended',
  //   'plugin:react/jsx-runtime',
  //   'plugin:react-hooks/recommended',
  // ],
  // parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  // settings: { react: { version: '18.2' } },
  // plugins: ['react-refresh'],
  // rules: {
  //   'react-refresh/only-export-components': 'warn',
  //   "no-unused-vars": [
  //     "error",
  //     {
  //         "varsIgnorePattern": "React"
  //     }
  // ]
  // },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended"
    ],
    "settings": {
      "react": {
        "version": "detect"
      }
    },
    "plugins": ["react", "react-hooks"],
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "env": {
      "browser": true
    },
    "rules": {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "no-unsafe-finally": "off",
      "react-refresh/only-export-components": "off",
      "react/jsx-uses-react": "error",   
      "react/jsx-uses-vars": "error",
      "no-unused-vars": [
        "error",
        {
            "varsIgnorePattern": "React"
        }
    ]
  }
  
  
  
}
