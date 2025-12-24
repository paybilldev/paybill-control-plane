module.exports = {
  extends: ['prettier', 'next/core-web-vitals', 'eslint-config-turbo'],
  plugins: ['eslint-plugin-barrel-files'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@next/next/no-img-element': 'off',
    'react/jsx-key': 'off',
    'react-hooks/rules-of-hooks': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/display-name': 'warn',
    'react/no-children-prop': 'warn',
    'barrel-files/avoid-re-export-all': 'error',
  },
}
