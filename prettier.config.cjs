const baseConfig = require('@upstatement/prettier-config');

module.exports = {
  ...baseConfig,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
