'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';  // Menggunakan Next.js Image untuk optimasi
import styles from './styles/PhotoGallery.module.css';

const photos = [
  { id: 1, src: '/photos/photo1.jpg', alt: 'Cinematic Photo 1' }, // Placeholder, ganti dengan path foto asli
  { id: 2, src: '/photos/photo2.jpg', alt: 'Cinematic Photo 2' },
  { id: 3, src: '/photos/photo3.jpg', alt: 'Cinematic Photo 3' },
  { id: 4, src: '/photos/photo4.jpg', alt: 'Cinematic Photo 4' },
  { id: 5, src: '/photos/photo5.jpg', alt: 'Cinematic Photo 5' },
  { id: 6, src: '/photos/photo6.jpg', alt: 'Cinematic Photo 6' },
  { id: 7, src: '/photos/photo7.jpg', alt: 'Cinematic Photo 7' },
];

export default function PhotoGallery() {
  return (
    <section className={styles.gallery}>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Photo Gallery
      </motion.h2>
      <div className={styles.grid}>
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className={`${styles.photoCard} glass`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={400}
              height={300}
              className={styles.photo}
              priority={index < 2}  // Lazy loading untuk performa
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}