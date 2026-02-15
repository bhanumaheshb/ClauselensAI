"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleQuickAccess = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate an instant login and redirect
    router.push("/dashboard");
  };

  return (
    <div className="relative min-h-screen bg-[#efe6d7] overflow-hidden text-[#111]">
      {/* Subtle background effects */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,#d4af37,transparent_40%),radial-gradient(circle_at_80%_30%,#ff7a59,transparent_40%)]" />

      {/* HEADER */}
      <div className="relative z-10 px-10 py-6 font-bold text-xl tracking-tight">
        ClauseLens AI
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-center mt-20 px-4">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-[#0e0e10] text-white w-full max-w-md rounded-2xl p-10 shadow-2xl border border-white/5"
        >
          <div className="mb-8">
            <span className="text-[10px] bg-[#d4af37]/20 text-[#d4af37] px-2 py-1 rounded-full uppercase tracking-widest font-bold">
              Demo Access Enabled
            </span>
            <h2 className="text-3xl font-black mt-4">Intelligence Portal</h2>
            <p className="text-gray-400 mt-2">
              Enter any identifier to access your workspace.
            </p>
          </div>

          <form onSubmit={handleQuickAccess}>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name or Email (e.g. demo@clauselens.ai)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 rounded-xl bg-[#1a1a1d] border border-[#2a2a2f] focus:border-[#d4af37] focus:outline-none transition-all"
                required
              />
              
              <button 
                type="submit"
                className="w-full bg-[#d4af37] text-black py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[#d4af37]/10"
              >
                Enter Dashboard →
              </button>
            </div>
          </form>

          <p className="text-xs text-gray-500 text-center mt-8 italic">
            No password required for this preview session.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
