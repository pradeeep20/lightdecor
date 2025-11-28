"use client";

import React from "react";

const PortfolioPage: React.FC = () => (
  <div style={styles.page}>
    <main style={styles.main}>
      <section style={styles.content}>
        <h1 style={styles.title}>Portfolio</h1>
        <p style={styles.paragraph}>
          Explore our collection of completed projects showcasing innovative lighting designs and elegant decor solutions that have brought countless events to life.
        </p>
      </section>
    </main>
    <footer style={styles.footer}>
      {/* Footer content will be added here */}
    </footer>
  </div>
);

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#0f172a",
    color: "#f8fafc",
    fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    flex: 1,
    padding: "64px clamp(24px, 6vw, 80px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    maxWidth: "1200px",
    width: "100%",
    textAlign: "center",
  },
  title: {
    margin: 0,
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: 600,
    color: "#f8fafc",
    marginBottom: "24px",
  },
  paragraph: {
    margin: 0,
    fontSize: "clamp(1rem, 2vw, 1.125rem)",
    lineHeight: 1.7,
    color: "rgba(248, 250, 252, 0.8)",
    maxWidth: "720px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  footer: {
    padding: "32px clamp(24px, 6vw, 80px)",
    background: "rgba(15, 23, 42, 0.85)",
    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
    textAlign: "center",
    color: "rgba(248, 250, 252, 0.6)",
  },
};

export default PortfolioPage;

