/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        game: {
          primary: '#6b21a8',    // Purple
          secondary: '#3b82f6',  // Blue
          dark: '#0f172a',       // Slate 900
          light: '#f8fafc',      // Slate 50
          accent: '#c084fc',     // Purple 400
          success: '#10b981',    // Emerald 500
          error: '#ef4444',      // Red 500
        }
      },
      backgroundImage: {
        'poster-gradient': 'radial-gradient(circle at center, #3b0764 0%, #0f172a 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-hover': '0 12px 40px 0 rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.2)',
        'neon': '0 0 15px rgba(168, 85, 247, 0.5), 0 0 30px rgba(168, 85, 247, 0.3)',
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'sweep': 'sweep 2s linear infinite',
      },
      keyframes: {
        sweep: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        }
      },
      borderRadius: {
        '4xl': '25px',
      }
    },
  },
  plugins: [],
};
