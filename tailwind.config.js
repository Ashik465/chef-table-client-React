/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#eda1c7",
        
"secondary": "#6202e8",
        
"accent": "#2c0977",
        
"neutral": "#241924",
        
"base-100": "#FFFFFF",
        
"info": "#66C9EA",
        
"success": "#13966C",
        
"warning": "#F6AE31",
        
"error": "#F7765F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

