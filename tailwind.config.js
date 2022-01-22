module.exports = {
  purge: ['./app/**/*.html.erb', './app/**/*.html.haml', './app/helpers/**/*.rb', './app/**/**/*.js',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms'), require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')],
}
