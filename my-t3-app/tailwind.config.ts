import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@headlessui/tailwindcss")],
  daisyui: {
    themes: ["lofi"],
  },
} satisfies Config;
