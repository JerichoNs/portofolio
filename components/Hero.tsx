"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./styles/Hero.module.css";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.hero}>
      <div className={styles.bgOrbs} aria-hidden="true" />

      <div className={styles.inner}>
        <motion.div
          className={`${styles.card} glass`}
          initial={reduce ? undefined : { opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <p className={styles.kicker}>CINEMATIC • PHOTOGRAPHER • RETOUCH</p>
          <h1 className={styles.title}>
            Visual Storyteller <span className={styles.grad}>Stories Told Through</span>{" "}
            Light and Emotion.
          </h1>
          <p className={styles.subtitle}>
            Portrait • Street • Editorial • Product — fokus pada mood, lighting,
            dan storytelling yang sinematik.
          </p>

          <div className={styles.actions}>
            <a className={styles.primary} href="#work">
              View Work
            </a>
            <a className={styles.secondary} href="#contact">
              Contact
            </a>
          </div>

          <div className={styles.meta}>
            <div className={styles.pill}>Based: Indonesia</div>
            <div className={styles.pill}>Available for Projects</div>
            <div className={styles.pill}>Dreamy Concept</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}