'use client';

import { motion } from 'framer-motion';

const videos = [
  { id: 'dQw4w9WgXcQ', title: 'Photography Reel 1' }, // Ganti dengan ID YouTube asli (misalnya, dari video photography/videography Anda)
  { id: '9bZkp7q19f0', title: 'Videography Clip 2' },
  { id: 'J---aiyznGQ', title: 'Cinematic Showcase 3' },
  { id: 'kJQP7kiw5Fk', title: 'Nature Photography 4' },
  { id: 'y6120QOlsfU', title: 'Event Videography 5' },
  { id: 'L_jWHffIx5E', title: 'Portrait Session 6' },
];

export default function Gallery() {
  return (
    <section className="gallery">
      <motion.h2
        className="gallery-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        My Gallery
      </motion.h2>
      <div className="video-grid">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            className="video-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="video-title">{video.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}