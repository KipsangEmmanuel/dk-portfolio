import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-color)",
        card: "var(--card-color)",
        foreground: "var(--text-color)",
        "muted-foreground": "var(--muted-color)",
        primary: "var(--accent-blue)",
        destructive: "var(--accent-red)",
      },
      borderRadius: {
        lg: "var(--radius)",
      },
      boxShadow: {
        concave:
          "inset 4px 4px 8px rgba(0,0,0,0.5), inset -4px -4px 8px rgba(255,255,255,0.05)",
        "concave-pressed":
          "inset -2px -2px 6px rgba(0,0,0,0.5), inset 2px 2px 6px rgba(255,255,255,0.05)",
      },
    },
  },
  plugins: [],
} satisfies Config;
