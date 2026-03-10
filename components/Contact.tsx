"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./styles/Contact.module.css";

type FormState = {
  name: string;
  email: string;
  message: string;
};

function encodeMailto(value: string) {
  return encodeURIComponent(value).replace(/%20/g, "+");
}

export default function Contact() {
  const reduce = useReducedMotion();

  // Ganti ini dengan data kamu
  const CONTACT_EMAIL = "Info.Thanael@gmail.com";
  const WHATSAPP_NUMBER = "6289618289884"; // tanpa +, contoh Indonesia: 62xxxx
  const INSTAGRAM_URL = "https://www.instagram.com/thanaell_/";
  const LOCATION = "Semarang, Indonesia";

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState(false);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Nama wajib diisi.";
    if (!form.email.trim()) e.email = "Email wajib diisi.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Format email tidak valid.";
    if (!form.message.trim()) e.message = "Pesan wajib diisi.";
    return e;
  }, [form]);

  const valid = Object.keys(errors).length === 0;

  const subject = `Project Inquiry — ${form.name || "Client"}`;
  const bodyLines = [
    `Nama: ${form.name || "-"}`,
    `Email: ${form.email || "-"}`,
    "",
    form.message || "",
  ];
  const body = bodyLines.join("\n");

  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeMailto(
    subject
  )}&body=${encodeMailto(body)}`;

  const waText = `Halo, saya ${form.name || "..."}. Email: ${form.email || "..."}.\n\n${form.message || "Saya ingin tanya soal jasa foto."}`;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched(true);

    if (!valid) return;

    // Tanpa backend: redirect ke mail client
    window.location.href = mailtoHref;
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.head}
          initial={reduce ? undefined : { opacity: 0, y: 10 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.kicker}>CONTACT</p>
          <h2 className={styles.title}>Let’s build a cinematic set</h2>
          <p className={styles.desc}>
            Kirim brief singkat: style, lokasi, tanggal, dan referensi mood. Saya balas secepatnya.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {/* Left: Contact Cards */}
          <motion.div
            className={styles.cards}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
          >
            <div className={`${styles.card} glass`}>
              <div className={styles.cardTop}>
                <span className={styles.icon} aria-hidden="true">✦</span>
                <div>
                  <div className={styles.cardTitle}>Email</div>
                  <div className={styles.cardText}>{CONTACT_EMAIL}</div>
                </div>
              </div>
              <a className={styles.cardLink} href={`mailto:${CONTACT_EMAIL}`}>
                Send email →
              </a>
            </div>

            <div className={`${styles.card} glass`}>
              <div className={styles.cardTop}>
                <span className={styles.icon} aria-hidden="true">⌁</span>
                <div>
                  <div className={styles.cardTitle}>WhatsApp</div>
                  <div className={styles.cardText}>+{WHATSAPP_NUMBER}</div>
                </div>
              </div>
              <a className={styles.cardLink} href={whatsappHref} target="_blank" rel="noreferrer">
                Chat on WhatsApp →
              </a>
            </div>

            <div className={`${styles.card} glass`}>
              <div className={styles.cardTop}>
                <span className={styles.icon} aria-hidden="true">⟁</span>
                <div>
                  <div className={styles.cardTitle}>Instagram</div>
                  <div className={styles.cardText}>DM for quick collab</div>
                </div>
              </div>
              <a className={styles.cardLink} href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                Open Instagram →
              </a>
            </div>

            <div className={`${styles.card} glass`}>
              <div className={styles.cardTop}>
                <span className={styles.icon} aria-hidden="true">◎</span>
                <div>
                  <div className={styles.cardTitle}>Location</div>
                  <div className={styles.cardText}>{LOCATION}</div>
                </div>
              </div>
              <a className={styles.cardLink} href="#work">
                View latest work →
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className={`${styles.formWrap} glass`}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.05 }}
          >
            <div className={styles.formHead}>
              <div className={styles.formTitle}>Send a message</div>
              <div className={styles.formHint}>
                akan membuka email client / WhatsApp.
              </div>
            </div>

            <form className={styles.form} onSubmit={onSubmit}>
              <label className={styles.field}>
                <span className={styles.label}>Name</span>
                <input
                  className={styles.input}
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  placeholder="Nama kamu"
                  autoComplete="name"
                />
                {touched && errors.name ? (
                  <span className={styles.error}>{errors.name}</span>
                ) : null}
              </label>

              <label className={styles.field}>
                <span className={styles.label}>Email</span>
                <input
                  className={styles.input}
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  placeholder="nama@email.com"
                  autoComplete="email"
                />
                {touched && errors.email ? (
                  <span className={styles.error}>{errors.email}</span>
                ) : null}
              </label>

              <label className={styles.field}>
                <span className={styles.label}>Message</span>
                <textarea
                  className={styles.textarea}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  placeholder="Ceritakan kebutuhan kamu: konsep, lokasi, tanggal, mood..."
                  rows={5}
                />
                {touched && errors.message ? (
                  <span className={styles.error}>{errors.message}</span>
                ) : null}
              </label>

              <div className={styles.actions}>
                <button className={styles.primary} type="submit" disabled={!valid && touched}>
                  Send via Email
                </button>

                <a
                  className={styles.secondary}
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setTouched(true)}
                >
                  Send via WhatsApp
                </a>
              </div>

              <div className={styles.note}>
                Dengan mengirim pesan, kamu setuju untuk dihubungi kembali melalui email/WA.
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
