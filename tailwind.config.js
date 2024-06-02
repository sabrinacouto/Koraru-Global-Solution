/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        colors: {
          white: "#fff",
          gainsboro: "rgba(217, 217, 217, 0)",
          cadetblue: "#4eabaf",
          darkslategray: {
            "100": "#2d4d66",
            "200": "#2c4d66",
          },
          lightcoral: "#f09390",
          slategray: {
            "100": "#52738c",
            "200": "#466379",
          },
          gray: "#fcfcfc",
          black: "#000",
          mediumturquoise: "#60c5c4",
        },
        spacing: {},
        fontFamily: {
          montserrat: "Montserrat"
        },
        borderRadius: {
          "31xl": "50px",
          "236xl": "255px",
          "61xl": "80px",
        },
      },
      fontSize: {
        xl: "20px",
        base: "16px",
        "13xl": "32px",
        lgi: "19px",
        "7xl": "26px",
        "5xl": "24px",
        inherit: "inherit",
      }
  },
  plugins: [],
}
