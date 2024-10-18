// packages/tailwind-config/tailwind-preset.js

module.exports = {
    theme: {
      extend: {
        colors: {
          primary: '#1DA1F2',  // Example shared color
          secondary: '#14171A',
        },
        spacing: {
          '72': '18rem',
          '84': '21rem',
          '96': '24rem',
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'), // Example of a shared plugin
    ],
  };
  