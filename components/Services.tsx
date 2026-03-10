"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./styles/Services.module.css";

const services = [
  {
    title: "Portrait Session",
    points: ["1–2 jam", "Moodboard + direction", "15 edited photos"],
  },
  {
    title: "Brand / Product",
    points: ["Concept lighting", "Set styling basic", "Output untuk ads & web"],
  },
  {
    title: "Editorial / Lookbook",
    points: ["Series storytelling", "Consistent grading", "High-res + web"],
  },
];

export default function Services() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 10 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className={styles.head}
        >
          <p className={styles.kicker}>SERVICES</p>
          <h2 className={styles.title}>What I can shoot</h2>
          <p className={styles.desc}>
            Paket fleksibel — bisa disesuaikan dengan kebutuhan project dan
            budget.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              className={`${styles.card} glass`}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, delay: idx * 0.08 }}
            >
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <ul className={styles.list}>
                {s.points.map((p) => (
                  <li key={p} className={styles.item}>
                    <span className={styles.tick} aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>

              <a className={styles.book} href="#contact">
                Book a session →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}