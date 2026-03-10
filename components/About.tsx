"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./styles/About.module.css";

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Delivered", value: "5+" },
  { label: "Happy Clients", value: "5+" },
  { label: "Editing Style", value: "Dreamy Concept" },
];

const skills = [
  "Photography SweetSeventeen",
  "Street Photography",
  "Product & Lifestyle",
  "Color Grading (Moody/Teal)",
  "Retouching (Skin, Cleanup)",
];

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={`${styles.panel} glass`}
          initial={reduce ? undefined : { opacity: 0, y: 18 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className={styles.top}>
            <div>
              <p className={styles.kicker}>ABOUT</p>
              <h2 className={styles.title}>Behind the lens</h2>
              <p className={styles.desc}>
                Saya adalah seorang Photographer & Videographer 
                dengan passion dalam menangkap momen dan menceritakan kisah melalui visual. 
                Dengan pengalaman 3 tahun Di PKBM Eagle School Dan Berbagai proyek freelance,
                saya telah mengasah keterampilan saya dalam berbagai genre fotografi
                termasuk potret, lanskap, dan fotografi jalanan
              </p>
            </div>

            <div className={styles.stats}>
              {stats.map((s) => (
                <div key={s.label} className={styles.statCard}>
                  <div className={styles.statValue}>{s.value}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.bottom}>
            <div className={styles.skillBlock}>
              <h3 className={styles.subTitle}>Specialties</h3>
              <ul className={styles.skillList}>
                {skills.map((it) => (
                  <li key={it} className={styles.skillItem}>
                    <span className={styles.dot} aria-hidden="true" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.note}>
              <div className={styles.noteHead}>
                <span className={styles.pulse} aria-hidden="true" />
                Workflow
              </div>
              <p className={styles.noteText}>
                Brief → moodboard → shoot → selection → retouch → delivery.
                Output siap IG/Ads + versi high-res untuk web/print.
              </p>
              <div className={styles.noteTags}>
                <span className={styles.tag}>RAW-to-Grade</span>
                <span className={styles.tag}>High-End Retouch</span>
                <span className={styles.tag}>Fast Turnaround</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}