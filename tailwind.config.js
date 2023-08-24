module.exports = {
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-radial":
          "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
      }),
      colors: {
        primary: "#1e3a8a", // You can customize these colors
        secondary: "#9333ea",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
