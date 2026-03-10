"use client";

import styles from "./styles/Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-label="Footer">
      <div className={styles.inner}>
        <div className={`${styles.card} glass`}>
          <div className={styles.left}>
            <div className={styles.brand}>
              <span className={styles.dot} aria-hidden="true" />
              Thanaell.Project
            </div>
            <p className={styles.desc}>
              Visual Storyteller — Where Every Image Has a Story
            </p>

            <div className={styles.social}>
              <a className={styles.socialLink} href="https://www.instagram.com/thanaell_/" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a className={styles.socialLink} href="https://behance.net/" target="_blank" rel="noreferrer">
                Behance
              </a>
              <a className={styles.socialLink} href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.cols}>
              <div className={styles.col}>
                <div className={styles.colTitle}>Explore</div>
                <a className={styles.link} href="#about">About</a>
                <a className={styles.link} href="#work">Work</a>
                <a className={styles.link} href="#services">Services</a>
              </div>

              <div className={styles.col}>
                <div className={styles.colTitle}>Contact</div>
                <a className={styles.link} href="info.thanael@gmail.com">info.thanael@gmail.com</a>
                <a className={styles.link} href="https://wa.me/6289618289884" target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
                <a className={styles.link} href="/cv.pdf" download>Download CV</a>
              </div>
            </div>

            <div className={styles.bottomBar}>
              <span>© {year} Thanael. All rights reserved.</span>
              <span className={styles.sep} aria-hidden="true">•</span>
              <span className={styles.small}>
                Dark • Glass • Neon
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 