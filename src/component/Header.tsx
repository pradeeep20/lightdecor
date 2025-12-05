"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
    { href: "/inquiry", label: "Inquiry" },
  ];

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <div style={styles.logo}>
          <Link href="/" style={styles.logoLink}>
            Lighting & Decor
          </Link>
        </div>
        <ul style={styles.navList}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href} style={styles.navItem}>
                <Link
                  href={link.href}
                  style={{
                    ...styles.navLink,
                    ...(isActive ? styles.navLinkActive : {}),
                  }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    backgroundColor: "rgba(15, 23, 42, 0.95)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  nav: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "16px clamp(24px, 6vw, 80px)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: 700,
  },
  logoLink: {
    color: "#f8fafc",
    textDecoration: "none",
    transition: "color 0.2s",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "32px",
    flexWrap: "wrap",
  },
  navItem: {
    margin: 0,
  },
  navLink: {
    color: "rgba(248, 250, 252, 0.8)",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: 500,
    transition: "color 0.2s",
    padding: "8px 0",
  },
  navLinkActive: {
    color: "#fbbf24",
    borderBottom: "2px solid #fbbf24",
  },
};

export default Header;
