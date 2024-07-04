/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    lightMode: 'class',
    extend: {
      screens: {
        qs: { max: "479px" },
        sm: { min: "480px" },
        md: { min: "768px" },
        lg: { min: "976px" },
        xl: { min: "1440px" },
      },
    },
  },
  plugins: [],
};
