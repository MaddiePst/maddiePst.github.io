/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          0: "#05050c",
          1: "#0a0c1c",
          2: "#100c26",
        },
        holo: {
          cyan: "#4dd8ff",
          violet: "#a78bfa",
          magenta: "#f472b6",
          mint: "#5eead4",
        },
        text: {
          0: "#f4f5fb",
          1: "#c7cadd",
          2: "#8b8fab",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "Sora", "sans-serif"],
        body: ["Sora", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        holo: "linear-gradient(120deg, #4dd8ff, #a78bfa 50%, #f472b6)",
        "holo-soft":
          "linear-gradient(120deg, rgba(77,216,255,0.35), rgba(167,139,250,0.35) 50%, rgba(244,114,182,0.35))",
        "field-glow":
          "radial-gradient(ellipse 80% 60% at 20% -10%, rgba(167,139,250,0.28), transparent 60%), radial-gradient(ellipse 70% 60% at 100% 0%, rgba(77,216,255,0.22), transparent 55%), radial-gradient(ellipse 70% 50% at 90% 90%, rgba(244,114,182,0.18), transparent 55%), linear-gradient(180deg, #05050c, #0a0c1c 40%, #100c26 100%)",
        grid: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-cell": "64px 64px",
        sheen: "200% auto",
      },
      boxShadow: {
        glow: "0 30px 90px rgba(77,216,255,0.18)",
        "glow-strong": "0 30px 110px rgba(167,139,250,0.32)",
        card: "0 24px 60px rgba(10,8,30,0.55), 0 0 40px rgba(77,216,255,0.12)",
      },
      keyframes: {
        float: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "100%": { transform: "translate(40px,60px) scale(1.12)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        sheen: {
          to: { backgroundPosition: "200% center" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 30px 90px rgba(77,216,255,0.18)" },
          "50%": { boxShadow: "0 30px 110px rgba(167,139,250,0.32)" },
        },
        "fade-up": {
          from: { opacity: 0, transform: "translateY(28px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 18s cubic-bezier(0.16,1,0.3,1) infinite alternate",
        floaty: "floaty 4.5s ease-in-out infinite",
        sheen: "sheen 6s linear infinite",
        "pulse-glow": "pulseGlow 5s ease-in-out infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};
