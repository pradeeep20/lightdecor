"use client";

import React, { useEffect, useState } from "react";

type Sequence = {
  id: string;
  gradient: string;
  blur?: string;
};

const SEQUENCES: Sequence[] = [
  {
    id: "aurora",
    gradient:
      "radial-gradient(circle at 20% 20%, rgba(251, 191, 36, 0.25), transparent 45%), radial-gradient(circle at 80% 0%, rgba(248, 113, 113, 0.3), transparent 50%), linear-gradient(135deg, #0f172a, #1e1b4b 40%, #0f172a 80%)",
    blur: "blur(40px)",
  },
  {
    id: "dusk",
    gradient:
      "radial-gradient(circle at 10% 80%, rgba(59, 130, 246, 0.35), transparent 45%), radial-gradient(circle at 70% 30%, rgba(248, 113, 113, 0.25), transparent 55%), linear-gradient(125deg, #111827, #0f172a 60%, #0b1120)",
    blur: "blur(50px)",
  },
  {
    id: "ember",
    gradient:
      "radial-gradient(circle at 85% 70%, rgba(248, 191, 36, 0.3), transparent 45%), radial-gradient(circle at 25% 25%, rgba(248, 113, 113, 0.35), transparent 50%), linear-gradient(115deg, #0a0f1f, #1f1a38 55%, #0f172a)",
    blur: "blur(45px)",
  },
];

const TRANSITION_INTERVAL = 9000;

const Background: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SEQUENCES.length);
    }, TRANSITION_INTERVAL);

    return () => clearInterval(intervalId);
  }, [prefersReducedMotion]);

  return (
    <div aria-hidden style={styles.wrapper}>
      {SEQUENCES.map((sequence, index) => (
        <div
          key={sequence.id}
          style={{
            ...styles.sequenceLayer,
            backgroundImage: sequence.gradient,
            filter: sequence.blur,
            opacity: prefersReducedMotion
              ? index === 0
                ? 1
                : 0
              : index === activeIndex
              ? 1
              : 0,
          }}
        />
      ))}

      <div style={styles.softGlow} />
      <div style={styles.textureOverlay} />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    position: "fixed",
    inset: 0,
    zIndex: 0,
    pointerEvents: "none",
    isolation: "isolate",
    overflow: "hidden",
  },
  sequenceLayer: {
    position: "absolute",
    inset: "-40%",
    transition: "opacity 2500ms ease",
    willChange: "opacity",
  },
  softGlow: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.08), transparent 45%)",
    mixBlendMode: "screen",
    opacity: 0.8,
  },
  textureOverlay: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(120deg, rgba(255, 255, 255, 0.04) 0%, transparent 60%)",
    mixBlendMode: "soft-light",
    opacity: 0.6,
  },
};

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
}

export default Background;



