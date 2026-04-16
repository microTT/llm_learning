/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./knowledge-graph/index.html",
    "./knowledge-graph/app.js",
    "./knowledge-graph/tailwind.input.css",
  ],
  theme: {
    extend: {
      colors: {
        page: {
          DEFAULT: "#07111d",
          strong: "#0d1826",
          code: "#1a2940",
        },
        surface: {
          hero: "#101a2a",
          muted: "#182538",
          stage: "#162437",
          domain: "#0d1725",
          module: "#213147",
          "module-hover": "#2a3d56",
          concept: "#162232",
          "concept-hover": "#1e3046",
          "concept-root": "#2b3e57",
          "concept-root-hover": "#364e6d",
          "concept-detail": "#23354b",
          "concept-detail-hover": "#2d4460",
          detail: "#0f1927",
          "detail-hover": "#162233",
          panel: "#0d1724",
          "panel-section": "#132031",
          "panel-pill": "#1a2a3f",
          stat: "#1b2a3f",
          empty: "#131d2c",
          relation: "#152233",
          "relation-entry": "#101a28",
          "relation-entry-hover": "#162536",
          "relation-note-hover": "#29415d",
          badge: "#22354d",
        },
        ink: {
          DEFAULT: "#e6eef9",
          soft: "#97acc4",
          accent: "#87a7cf",
          deep: "#d7e6fb",
        },
        line: {
          DEFAULT: "#22354b",
          strong: "#2d4664",
          bold: "#476585",
        },
      },
      fontFamily: {
        sans: [
          "Avenir Next",
          "IBM Plex Sans",
          "PingFang SC",
          "Noto Sans SC",
          "Helvetica Neue",
          "sans-serif",
        ],
        mono: ["IBM Plex Mono", "SFMono-Regular", "Consolas", "monospace"],
      },
      boxShadow: {
        panel: "0 24px 60px rgba(4, 12, 20, 0.34)",
        soft: "0 18px 40px rgba(3, 10, 18, 0.22)",
        drawer: "-24px 0 48px rgba(0, 0, 0, 0.36)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
