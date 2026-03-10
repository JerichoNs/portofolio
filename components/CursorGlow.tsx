"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./styles/CursorGlow.module.css";

type Pos = { x: number; y: number };

export default function CursorGlow() {
  const [pos, setPos] = useState<Pos>({ x: 0, y: 0 });

  const enabled = useMemo(() => {
    if (typeof window === "undefined") return false;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    return finePointer;
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setPos({ x: e.clientX, y: e.clientY }));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className={styles.cursor}
      style={{ left: pos.x, top: pos.y }}
      aria-hidden="true"
    />
  );
}