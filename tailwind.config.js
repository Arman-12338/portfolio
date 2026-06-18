/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#030014",
          bgLight: "#050515",
          primary: "#a855f7",    // Premium Violet-Purple
          secondary: "#06b6d4",  // Cyan-Neon Blue
          accent: "#ec4899",     // Hot Pink-Accent
          muted: "#94a3b8",      // Subtle Gray/Slate
          border: "rgba(255, 255, 255, 0.08)",
        }
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        mono: ["Space Grotesk", "monospace"],
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glowPulse: {
          '0%': { filter: 'drop-shadow(0 0 5px rgba(168, 85, 247, 0.3))' },
          '100%': { filter: 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.6))' }
        }
      },
      boxShadow: {
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.35)',
        'neon-cyan': '0 0 20px rgba(6, 182, 212, 0.35)',
        'neon-pink': '0 0 20px rgba(236, 72, 153, 0.35)',
        'glass': '0 8px 32px 0 rgba(3, 0, 20, 0.37)',
      }
    },
  },
  plugins: [],
}
