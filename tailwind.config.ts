import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 3))' },
        },
      },
      fontFamily: {
        reenie: ["Reenie Beanie", "cursive"],
        Roboto: "Roboto",
      },
      colors: {
        brainster: {
          100: "#FCEBD5",
          200: '#A16A5E',
          300: '#EDD5BB',
        }
      },
      boxShadow: {
          figma: '0px 2px 2px 0px rgba(0, 0, 0, 0.25);'

      }
    },
  },
  plugins: [],
} satisfies Config;
