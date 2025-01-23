import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: "var(--dark)",
        light: "var(--light)",
        yellow: "var(--yellow)",
        lightdark: "var(--light-dark)",
        grey: "var(--grey)",
      },
      fontFamily: {
        "helvetica-bold": "var(--font-helvetica-bold)",
        helvetica: "var(--font-helvetica-regular)",
        poppins: "var(--font-poppins)",
      },
    },
  },
  plugins: [],
} satisfies Config;
