"use client";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <motion.h1
        className="text-4xl font-bold text-gray-800 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Digital Star Space
      </motion.h1>
      <p className="text-gray-600 text-center max-w-lg">
        Empowering young minds with digital skills, creativity, and confidence for the future.
      </p>
    </main>
  );
}