// This setup customized typography for both light and dark modes, matching DaisyUI's colors
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // match DaisyUI font
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),
            a: {
              color: theme("colors.primary.600"),
              "&:hover": {
                color: theme("colors.primary.700"),
              },
            },
            h1: {
              fontWeight: "700",
              color: theme("colors.gray.900"),
            },
            h2: {
              fontWeight: "600",
              color: theme("colors.gray.900"),
            },
            code: {
              backgroundColor: theme("colors.gray.100"),
              padding: "0.2rem 0.4rem",
              borderRadius: "0.25rem",
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.primary.400"),
              "&:hover": {
                color: theme("colors.primary.300"),
              },
            },
            h1: {
              color: theme("colors.gray.100"),
            },
            code: {
              backgroundColor: theme("colors.gray.800"),
            },
          },
        },
      }),
    },
  },
  plugins: [
    daisyui,
    require("@tailwindcss/typography"),
  ],
  daisyui: {
    themes: ["light", "dark"], // Add your themes here
  },
};


