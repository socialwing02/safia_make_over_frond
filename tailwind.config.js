import { Mode } from '@mui/icons-material';
import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playball: ['"Playball"', "cursive"], // Add Playball font
      },
      
    }
  },
  plugins: [],
};

