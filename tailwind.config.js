/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F1EB",
        foreground: "#3A3A3A",
        primary: {
          DEFAULT: "#E8E0D6",
          foreground: "#3A3A3A",
          50: "#F5F1EB",
          100: "#E8E0D6",
          200: "#D4C4B0",
          300: "#C0A88A",
          400: "#AC8C64",
          500: "#8B7355",
          600: "#6B5B47",
          700: "#4B3F32",
          800: "#2B231D",
          900: "#1A1510",
        },
        secondary: {
          DEFAULT: "#8B7355",
          foreground: "#F5F1EB",
          50: "#F7F4F0",
          100: "#E8E0D6",
          200: "#D4C4B0",
          300: "#C0A88A",
          400: "#AC8C64",
          500: "#8B7355",
          600: "#6B5B47",
          700: "#4B3F32",
          800: "#2B231D",
          900: "#1A1510",
        },
        accent: {
          DEFAULT: "#D4B5A0",
          foreground: "#3A3A3A",
          50: "#FAF7F5",
          100: "#F0E6DD",
          200: "#E6D2C1",
          300: "#DCBEA5",
          400: "#D4B5A0",
          500: "#C49B82",
          600: "#B48164",
          700: "#9A6B4A",
          800: "#7A5238",
          900: "#5A3926",
        },
        muted: {
          DEFAULT: "#E8E0D6",
          foreground: "#8B7355",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#3A3A3A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in": "slide-in 0.5s ease-out",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      boxShadow: {
        luxury: "0 4px 20px rgba(139, 115, 85, 0.15)",
        "luxury-hover": "0 8px 30px rgba(139, 115, 85, 0.25)",
        card: "0 2px 10px rgba(139, 115, 85, 0.08)",
        "card-hover": "0 4px 20px rgba(139, 115, 85, 0.15)",
      },
    },
  },
  plugins: [],
};
