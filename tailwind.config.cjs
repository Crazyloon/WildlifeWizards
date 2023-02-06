/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2k": "1921px",
        "4k": "2561px",
      },
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
        "font-primary": "hsl(var(--font-primary) / <alpha-value>)",
        "font-secondary": "hsl(var(--font-secondary) / <alpha-value>)",
        shadow: "hsl(var(--shadow) / <alpha-value>)",

        background: "hsl(var(--background) / <alpha-value>)",
        navbar: "hsl(var(--navbar) / <alpha-value>)",
        // navbar: "hsl(var(--navbar) / <alpha-value>)",

        "link-color": "hsl(var(--link-color) / <alpha-value>)",
        "link-color-hover": "hsl(var(--link-color-hover) / <alpha-value>)",
        "link-color-active": "hsl(var(--link-color-active) / <alpha-value>)",
        "link-color-visited": "hsl(var(--link-color-visited) / <alpha-value>)",
        "link-text": "hsl(var(--link-text) / <alpha-value>)",

        primary: "hsl(var(--primary) / <alpha-value>)",
        "primary-hover": "hsl(var(--primary-hover) / <alpha-value>)",
        "primary-focus": "hsl(var(--primary-focus) / <alpha-value>)",
        "primary-active": "hsl(var(--primary-active) / <alpha-value>)",
        "primary-after": "hsl(var(--primary-after) / <alpha-value>)",
        "primary-faded": "hsl(var(--primary-faded) / <alpha-value>)",

        "primary-dark": "hsl(var(--primary-dark) / <alpha-value>)",
        "primary-dark-hover": "hsl(var(--primary-dark-hover) / <alpha-value>)",
        "primary-dark-focus": "hsl(var(--primary-dark-focus) / <alpha-value>)",
        "primary-dark-active":
          "hsl(var(--primary-dark-active) / <alpha-value>)",

        secondary: "hsl(var(--secondary) / <alpha-value>)",
        "secondary-hover": "hsl(var(--secondary-hover) / <alpha-value>)",
        "secondary-focus": "hsl(var(--secondary-focus) / <alpha-value>)",
        "secondary-active": "hsl(var(--secondary-active) / <alpha-value>)",
        "secondary-faded": "var(--secondary-faded)",

        "secondary-dark": "hsl(var(--secondary-dark) / <alpha-value>)",
        "secondary-dark-hover":
          "hsl(var(--secondary-dark-hover) / <alpha-value>)",
        "secondary-dark-focus":
          "hsl(var(--secondary-dark-focus) / <alpha-value>)",
        "secondary-dark-active": "var(--secondary-dark-active)",

        accent: "hsl(var(--accent) / <alpha-value>)",
        "accent-hover": "hsl(var(--accent-hover) / <alpha-value>)",
        "accent-focus": "hsl(var(--accent-focus) / <alpha-value>)",
        "accent-active": "hsl(var(--accent-active) / <alpha-value>)",
        "accent-faded": "hsl(var(--accent-faded) / <alpha-value>)",

        success: "hsl(var(--success) / <alpha-value>)",
        "success-hover": "hsl(var(--success-hover) / <alpha-value>)",
        "success-focus": "hsl(var(--success-focus) / <alpha-value>)",
        "success-active": "hsl(var(--success-active) / <alpha-value>)",

        info: "hsl(var(--info) / <alpha-value>)",
        "info-hover": "hsl(var(--info-hover) / <alpha-value>)",
        "info-focus": "hsl(var(--info-focus) / <alpha-value>)",
        "info-active": "hsl(var(--info-active) / <alpha-value>)",

        warning: "hsl(var(--warning) / <alpha-value>)",
        "warning-hover": "hsl(var(--warning-hover) / <alpha-value>)",
        "warning-focus": "hsl(var(--warning-focus) / <alpha-value>)",
        "warning-active": "hsl(var(--warning-active) / <alpha-value>)",

        error: "hsl(var(--error) / <alpha-value>)",
        "error-hover": "hsl(var(--error-hover) / <alpha-value>)",
        "error-focus": "hsl(var(--error-focus) / <alpha-value>)",
        "error-active": "hsl(var(--error-active) / <alpha-value>)",
      },
      boxShadow: {
        "lg-left": "-5px 9px 20px 5px rgb(0 0 0 / 35%)",
      },
    },
  },
  plugins: [],
};
