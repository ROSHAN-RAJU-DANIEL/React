module.exports = {
  purge: [
    './src/**/*.js',
    './public/index.html',
  ],
  theme: {
    // ...
    extend: {
      // Add custom fonts here
      fontFamily: {
        'kaushan': ['Kaushan Script', 'cursive'],
        'source-sans-pro': ['Source Sans Pro']
      },
    },
  },
}
