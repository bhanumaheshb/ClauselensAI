"use client";

import { useState } from "react";
import { registerUser } from "@/lib/api";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!name || !email || !password) {
      alert("Fill all fields");
      return;
    }

    setLoading(true);
    try {
      await registerUser({ name, email, password });
      alert("Account created!");
      window.location.href = "/login";
    } catch (e) {
      alert("Signup failed");
    }
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen bg-[#efe6d7] overflow-hidden text-[#111]">

      {/* gradient blobs */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,#d4af37,transparent_40%),radial-gradient(circle_at_80%_30%,#ff7a59,transparent_40%)]" />

      {/* HEADER */}
      <div className="relative z-10 px-10 py-6 font-bold text-xl">
        ClauseLens AI
      </div>

      {/* CARD */}
      <div className="relative z-10 flex items-center justify-center mt-20">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-[#0e0e10] text-white w-full max-w-md rounded-2xl p-10 shadow-2xl"
        >
          <h2 className="text-3xl font-black mb-2">
            Create account
          </h2>

          <p className="text-gray-400 mb-8">
            Start analyzing contracts in seconds.
          </p>

          {/* NAME */}
          <input
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-4 p-3 rounded-lg bg-[#1a1a1d] border border-[#2a2a2f]"
          />

          {/* EMAIL */}
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-3 rounded-lg bg-[#1a1a1d] border border-[#2a2a2f]"
          />

          {/* PASSWORD */}
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 p-3 rounded-lg bg-[#1a1a1d] border border-[#2a2a2f]"
          />

          {/* BUTTON */}
          <button
            onClick={handleSignup}
            disabled={loading}
            className="w-full bg-[#d4af37] text-black py-3 rounded-lg font-bold hover:opacity-90 transition"
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>

          <p className="text-sm text-gray-400 text-center mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-[#d4af37] font-semibold">
              Login
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
