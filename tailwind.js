module.exports = {
  theme: {
    spinner: () => ({
      default: {
        color: "#dae1e7",
        size: "10rem",
        border: "2px",
        speed: "1000ms"
      }
    }),
    extend: {
      colors: {
        gray: {
          "custom-color": "#dae1e7",
          "100": "#f5f5f5",
          "200": "#eeeeee",
          "300": "#e0e0e0",
          "400": "#bdbdbd",
          "500": "#9e9e9e",
          "600": "#757575",
          "700": "#616161",
          "800": "#424242",
          "900": "#212121"
        }
      }
    }
  },
  variants: { spinner: ["responsive"] },
  plugins: [
    require("glhd-tailwindcss-transitions")(),
    require("tailwindcss-spinner")(),
    function({ addUtilities }) {
      const newUtilities = {
        ".transform-center": {
          transform: "translate(-50%,-50%)"
        },
        ".top-50": {
          top: "50%"
        },
        ".left-50": {
          left: "50%"
        }
      };
      addUtilities(newUtilities);
    }
  ]
};
