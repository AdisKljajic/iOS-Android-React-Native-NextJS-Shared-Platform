 // apps/next/tailwind.config.js

const sharedPreset = require('../../packages/app/tailwind-config/tailwind-preset');

module.exports = {
  presets: [sharedPreset],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    '../../packages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
