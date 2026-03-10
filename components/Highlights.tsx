"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./styles/Highlights.module.css";

const items = [
  {
    title: "Campaign-ready look",
    desc: "Color palette cinematic: neon accent + deep shadows (noir).",
  },
  {
    title: "Fast delivery",
    desc: "Preview 24–48 jam, final deliver sesuai scope dan kebutuhan.",
  },
  {
    title: "Consistency",
    desc: "Tone warna dan skin retouch konsisten across series.",
  },
];

export default function Highlights() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.head}
          initial={reduce ? undefined : { opacity: 0, y: 10 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.kicker}>HIGHLIGHTS</p>
          <h2 className={styles.title}>Results that feel like a film frame</h2>
          <p className={styles.desc}>
            Dirancang untuk portfolio, brand campaign, dan social content yang
            “high-end”.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              className={`${styles.card} glass`}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, delay: idx * 0.08 }}
            >
              <div className={styles.badge}>
                <span className={styles.badgeGlow} aria-hidden="true" />
                0{idx + 1}
              </div>
              <h3 className={styles.cardTitle}>{it.title}</h3>
              <p className={styles.cardDesc}>{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}