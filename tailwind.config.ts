import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        marrom: "#833B05",
        laranja: "#B6630A",
        amarelo: "#D99729",
        gema: "#ECC470",
        cinza: "#CBCBCB",
        offwhite: "#EFEFEF"
      },
      fontFamily: {
        'body': 'Roboto',
        'title': "Fjalla One"
      },
    },
  },
  plugins: [],
};
export default config;
