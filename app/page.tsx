"use client";

import { motion, useReducedMotion } from "framer-motion";
import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Highlights from "@/components/Highlights";
import Services from "@/components/Services";
import PhotoGallery from "@/components/PhotoGallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  const reduce = useReducedMotion();

  return (
    <div>
      <CursorGlow />
      <Navbar />

      <motion.main
        initial={reduce ? undefined : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="highlights">
          <Highlights />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="work">
          <PhotoGallery />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </motion.main>
    </div>
  );
}