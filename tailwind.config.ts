import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        lagoon: "#0B5C63",
        river: "#117C7C",
        sun: "#F5A524",
        ink: "#172121",
        mist: "#F3F7F6",
        coral: "#E76F51"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(11, 92, 99, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
