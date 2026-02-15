"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

type Node = { x: number; y: number };

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [nodes, setNodes] = useState<Node[]>([]);

  useEffect(() => {
    const move = (e: MouseEvent) =>
      setMouse({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", move);

    const generatedNodes = Array.from({ length: 25 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));

    setNodes(generatedNodes);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0b0b0d] text-[#f5f1e6] overflow-hidden">

      {/* ================= CURSOR GLOW ================= */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-40 h-40 rounded-full bg-[#d4af37]/20 blur-3xl z-50"
        animate={{ x: mouse.x - 80, y: mouse.y - 80 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      />

      {/* ================= BACKGROUND GRADIENT ================= */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1208] via-[#0b0b0d] to-[#140a1f]" />

      {/* ================= NEURAL NODES ================= */}
      <svg className="absolute inset-0 opacity-20">
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={`${n.x}%`}
            cy={`${n.y}%`}
            r="2"
            fill="#d4af37"
          />
        ))}
      </svg>

      {/* ================= LEFT FLOATING DOCUMENT ================= */}
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 0.8 }}
        transition={{ duration: 1 }}
        className="absolute left-16 top-1/3 hidden xl:block"
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="w-64 h-80 bg-[#1a1a1d] border border-[#2a2a2f] rounded-xl p-6 shadow-2xl rotate-[-8deg]"
        >
          <div className="h-3 bg-[#d4af37] w-1/2 mb-4 rounded" />

          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
              transition={{ repeat: Infinity, duration: 3 + i }}
              className="h-2 bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent bg-[length:200%_100%] rounded mb-2"
            />
          ))}
        </motion.div>
      </motion.div>

      {/* ================= RIGHT FLOATING DOCUMENT STACK ================= */}
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute right-16 top-1/3 hidden xl:block"
        style={{ perspective: 1000 }}
      >
        <motion.div
          animate={{ rotateY: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="w-72 h-96 bg-[#1a1a1d] border border-[#2a2a2f] rounded-2xl shadow-2xl p-6"
        >
          <div className="h-3 bg-[#d4af37] w-1/3 mb-6 rounded" />

          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
              transition={{ repeat: Infinity, duration: 2 + i }}
              className="h-2 bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent bg-[length:200%_100%] rounded mb-3"
            />
          ))}
        </motion.div>
      </motion.div>

      {/* ================= SCANNING BEAM ================= */}
      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 900 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="absolute left-1/2 -translate-x-1/2 w-[2px] h-[200px] bg-gradient-to-b from-transparent via-[#d4af37] to-transparent opacity-20"
      />

      {/* ================= HERO ================= */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-40">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl md:text-[120px] font-black tracking-tight leading-none"
        >
          CLAUSELENS.AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-xl text-gray-400 max-w-2xl"
        >
          AI-Powered Contract Intelligence for Modern Enterprises
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex gap-6"
        >
          <Link
            href="/signup"
            className="bg-[#d4af37] text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Start Free
          </Link>

          <Link
            href="/dashboard"
            className="border border-[#d4af37] text-[#d4af37] px-8 py-4 rounded-full hover:bg-[#d4af37] hover:text-black transition-all duration-300"
          >
            View Demo
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs tracking-widest text-gray-500"
      >
        SCROLL TO DISCOVER
      </motion.div>

    </div>
  );
}