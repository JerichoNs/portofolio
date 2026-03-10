"use client";

import styles from "./styles/Navbar.module.css";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} glass`} aria-label="Primary">
        <a className={styles.brand} href="#home">
          <span className={styles.brandGlow} />
          Thanael.Project
        </a>

        <div className={styles.links}>
          {links.map((l) => (
            <a key={l.href} className={styles.link} href={l.href}>
              {l.label}
            </a>
          ))}
          <a className={styles.cta} href="/cv.pdf" download>
            Download CV
          </a>
        </div>
      </nav>
    </header>
  );
}  