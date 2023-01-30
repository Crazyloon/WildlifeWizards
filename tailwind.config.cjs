/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bounceRight: {
          "0%, 100%": {
            transform: "translateX(0)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(25%)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        bounceLeft: {
          "0%, 100%": {
            transform: "translateX(0)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(-25%)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(-24deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 2s ease-in-out infinite",
        bounceRight: "bounceRight 1s infinite",
        bounceLeft: "bounceLeft 1s infinite",
      },
      colors: {
        white: "hsl(var(--white) / <alpha-value>)",
        black: "hsl(var(--black) / <alpha-value>)",
        "font-primary": "var(--font-primary)",
        "font-secondary": "var(--font-secondary)",
        shadow: "var(--shadow)",

        background: "var(--background)",
        navbar: "hsl(var(--navbar) / <alpha-value>)",
        // navbar: "hsl(var(--navbar) / <alpha-value>)",

        "link-color": "var(--link-color)",
        "link-color-hover": "var(--link-color-hover)",
        "link-color-active": "var(--link-color-active)",
        "link-color-visited": "var(--link-color-visited)",
        "link-text": "var(--white)",

        primary: "hsl(var(--primary) / <alpha-value>)",
        "primary-hover": "hsl(var(--primary-hover) / <alpha-value>)",
        "primary-focus": "hsl(var(--primary-focus) / <alpha-value>)",
        "primary-active": "hsl(var(--primary-active) / <alpha-value>)",
        "primary-after": "hsl(var(--primary-after) / <alpha-value>)",
        "primary-faded": "hsl(var(--primary-faded) / <alpha-value>)",

        "primary-dark": "var(--primary-dark)",
        "primary-dark-hover": "var(--primary-dark-hover)",
        "primary-dark-focus": "var(--primary-dark-focus)",
        "primary-dark-active": "var(--primary-dark-active)",

        secondary: "var(--secondary)",
        "secondary-hover": "var(--secondary-hover)",
        "secondary-focus": "var(--secondary-focus)",
        "secondary-active": "var(--secondary-active)",
        "secondary-faded": "var(--secondary-faded)",

        "secondary-dark": "var(--secondary-dark)",
        "secondary-dark-hover": "var(--secondary-dark-hover)",
        "secondary-dark-focus": "var(--secondary-dark-focus)",
        "secondary-dark-active": "var(--secondary-dark-active)",

        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "accent-focus": "var(--accent-focus)",
        "accent-active": "var(--accent-active)",
        "accent-faded": "var(--accent-faded)",

        success: "var(--success)",
        "success-hover": "var(--success-hover)",
        "success-focus": "var(--success-focus)",
        "success-active": "var(--success-active)",

        info: "var(--info)",
        "info-hover": "var(--info-hover)",
        "info-focus": "var(--info-focus)",
        "info-active": "var(--info-active)",

        warning: "var(--warning)",
        "warning-hover": "var(--warning-hover)",
        "warning-focus": "var(--warning-focus)",
        "warning-active": "var(--warning-active)",

        error: "var(--error)",
        "error-hover": "var(--error-hover)",
        "error-focus": "var(--error-focus)",
        "error-active": "var(--error-active)",
      },
    },
  },
  plugins: [],
};
