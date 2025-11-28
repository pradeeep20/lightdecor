// src/components/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        ...styles.header,
        padding: isScrolled ? "8px 24px" : "24px",
        gap: isScrolled ? "8px" : "20px",
        transition: "all 0.3s ease",
      }}
    >
      {/* Branding */}
      <div style={styles.branding}>
        <div
          style={{
            ...styles.logoMark,
            width: isScrolled ? "42px" : "56px",
            height: isScrolled ? "42px" : "56px",
            fontSize: isScrolled ? "1rem" : "1.2rem",
          }}
        >
          SS
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              ...styles.brandName,
              fontSize: isScrolled ? "1.1rem" : "1.5rem",
            }}
          >
            Shree Sawariya Light Decor
          </p>
          {!isScrolled && (
            <p style={styles.brandTagline}>Where elegance meets illumination</p>
          )}
        </div>
      </div>

      {/* Navigation + Inquiry */}
      <div style={styles.navContainer}>
        <nav style={styles.nav}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} style={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/inquiry" style={styles.inquiryBtn}>
          Inquiry
        </Link>
      </div>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 999,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "24px",
    background: "rgba(15, 23, 42, 0.85)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    boxShadow: "0 10px 40px rgba(15, 23, 42, 0.4)",
    backdropFilter: "blur(12px)",
  },

  branding: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  logoMark: {
    borderRadius: "18px",
    background: "linear-gradient(135deg, #fbbf24, #f87171)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    color: "#fff",
    transition: "all 0.3s ease",
  },

  brandName: {
    margin: 0,
    fontWeight: 600,
    color: "#fff",
    transition: "all 0.3s ease",
  },

  brandTagline: {
    margin: 0,
    fontSize: "0.85rem",
    color: "rgba(248, 250, 252, 0.7)",
    transition: "opacity 0.3s ease",
  },

  navContainer: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
  },

  nav: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },

  navLink: {
    color: "#f8fafc",
    textDecoration: "none",
    fontSize: "0.9rem",
    textTransform: "uppercase",
    transition: "all 0.3s ease",
  },

  inquiryBtn: {
    padding: "8px 16px",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #fbbf24, #f87171)",
    color: "#0f172a",
    fontWeight: 600,
    border: "none",
    cursor: "pointer",
    textTransform: "uppercase",
    transition: "all 0.3s ease",
  },
};

export default Header;
