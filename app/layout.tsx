import type { Metadata } from "next";
import "./globals.css";
import Snow from "@/components/Snow";

export const metadata: Metadata = {
  title: "Portfolio — Photographer",
  description:
    "Cinematic futuristic photography portfolio with glassmorphism UI.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <Snow />
        {children}
      </body>
    </html>
  );
}
