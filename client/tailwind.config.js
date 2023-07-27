/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    fontSize: {
      sm: '0.8rem',
      md: '0.9rem',
      base: '1rem',
      xl: '1.15rem',
      '1xl': '1.35em',
      '2xl': '1.65em',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"]
      },
      // backgroundImage: theme => ({
      //   'bg-nft': "url('../assets/projectsimg/nft.jpg')",
      //   'bg-portfolio': "url('../assets/projectsimg/portfolio.jpg')",
      //   'bg-animefreak': "url('../assets/projectsimg/animefreak.jpg')",
      // })
    },
    screens: {
      xs: "360px", // xsmall
      sss: "405px", // phone
      ss: "620px", // tablet
      sm: "768px", // ipad
      md: "1024px", // ipad-large
      lg: "1280px", // desktop
      lg1: "1366px", // laptop
      lg2: "1660px", // small computer
      xl: "1920px", // computer
    },
  },
  plugins: [],
} 