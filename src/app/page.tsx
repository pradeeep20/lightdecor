// src/app/page.tsx
"use client";

import React, { useEffect, useState } from "react";

const carouselImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1500&q=80",
    caption: "Ambient glow for intimate celebrations",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1500&q=80",
    caption: "Luxury chandeliers that elevate spaces",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1440428099904-c6d459a7e7b1?auto=format&fit=crop&w=1500&q=80",
    caption: "Statement decor with a modern flair",
  },
];

const Page: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length),
      6000
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div>
          <p style={styles.heroEyebrow}>Lighting Concepts · Décor Experiences</p>
          <h1 style={styles.heroTitle}>Make every event shimmer</h1>
          <p style={styles.heroCopy}>
            Bespoke lighting installations curated with handcrafted fixtures, soft gradients, and a contemporary palette that adapts
            beautifully on any screen size.
          </p>
        </div>
      </section>

      {/* Carousel Section */}
      <section style={styles.carouselSection}>
        <div style={styles.carousel}>
          <div
            style={{
              ...styles.carouselTrack,
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {carouselImages.map((image) => (
              <div
                key={image.id}
                style={{
                  ...styles.slide,
                  backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.6), rgba(0,0,0,0.25)), url(${image.src})`,
                }}
              >
                <p style={styles.slideCaption}>{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={styles.dots}>
          {carouselImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setCurrentSlide(index)}
              style={{
                ...styles.dot,
                opacity: currentSlide === index ? 1 : 0.3,
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#0f172a",
    color: "#f8fafc",
    fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif",
    padding: "40px clamp(20px, 6vw, 80px)",
    display: "flex",
    flexDirection: "column",
    gap: "32px",
  },
  hero: {
    display: "grid",
    gap: "16px",
    background:
      "linear-gradient(135deg, rgba(248, 250, 252, 0.02), rgba(251, 191, 36, 0.05))",
    borderRadius: "24px",
    padding: "36px",
    border: "1px solid rgba(255, 255, 255, 0.06)",
  },
  heroEyebrow: {
    margin: 0,
    letterSpacing: "0.4em",
    fontSize: "0.75rem",
    textTransform: "uppercase",
    color: "rgba(248, 250, 252, 0.6)",
  },
  heroTitle: {
    margin: 0,
    fontSize: "clamp(2rem, 4vw, 3rem)",
    lineHeight: 1.2,
  },
  heroCopy: {
    margin: 0,
    maxWidth: "620px",
    color: "rgba(248, 250, 252, 0.75)",
    fontSize: "1rem",
  },
  carouselSection: {
    background: "rgba(15, 23, 42, 0.85)",
    borderRadius: "24px",
    padding: "32px clamp(24px, 4vw, 48px)",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    boxShadow: "0 25px 60px rgba(2, 6, 23, 0.65)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  carousel: {
    overflow: "hidden",
    borderRadius: "18px",
  },
  carouselTrack: {
    display: "flex",
    transition: "transform 600ms ease",
  },
  slide: {
    minWidth: "100%",
    height: "320px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "flex-end",
    padding: "24px",
  },
  slideCaption: {
    margin: 0,
    fontSize: "1.2rem",
    fontWeight: 500,
  },
  dots: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "999px",
    border: "none",
    backgroundColor: "#fbbf24",
    cursor: "pointer",
    transition: "opacity 200ms ease",
  },
};

export default Page;
