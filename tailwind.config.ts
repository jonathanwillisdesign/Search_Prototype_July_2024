import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      "0": "0px",
      "2-5": "2.5px",
      "5": "5px",
      "10": "10px",
      "15": "15px",
      "20": "20px",
      "30": "30px",
      "40": "40px",
      "60": "60px",
      "80": "80px",
      "100": "100px",
      "120": "120px",
      "150": "150px",
    },
    fontFamily: {
      sans: ["var(--font-adi-din)"],
      condensed: ["var(--font-adi-din-condensed)"],
      title: ["var(--font-adi-text)"],
    },
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "22px"],
      lg: ["18px", "24px"],
      xl: ["20px", "26px"],
      "2xl": ["24px", "28px"],
      "3xl": ["30px", "32px"],
      "4xl": ["40px", "40px"],
    },
    letterSpacing: {
      tight: "-.025em",
      normal: "0",
      wide: ".01em",
      wider: ".015em",
      widest: ".02em",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#FFFFFF",
      gray: {
        light: "#ECEFF1",
        DEFAULT: "#D3D7DA",
        dark: "#767677",
      },
      ivory: "#F5F5E5",
      yellow: "#EDE734",
      orange: "#D98916",
      shamrock: "#2ADA71",
      sage: "#9DB9B0",
      red: "#E32B2B",
      green: "#00AA55",
      blue: "#0081C7",
    },
    extend: {
      keyframes: {
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(10px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: "translateX(-10px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        slideDownAndFade: "slideDownAndFade 150ms cubic-bezier(0.4, 0, 0.2, 1)",
        slideLeftAndFade: "slideLeftAndFade 150ms cubic-bezier(0.4, 0, 0.2, 1)",
        slideUpAndFade: "slideUpAndFade 150ms cubic-bezier(0.4, 0, 0.2, 1)",
        slideRightAndFade:
          "slideRightAndFade 150ms cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
