export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",        
        secondary: "#8b5cf6",      
        accent: "#22c55e",         

        background: "#0f172a",     
        foreground: "#e2e8f0",     

        card: "#1e293b",           
        muted: "#334155",
        "muted-foreground": "#94a3b8",

        "input-background": "#1e293b",
      },

      backdropBlur: {
        xs: "2px",
      },

      boxShadow: {
        glow: "0 0 20px rgba(99, 102, 241, 0.5)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      animation: {
        float: "float 3s ease-in-out infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};