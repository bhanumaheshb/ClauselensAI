"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center px-10 py-5 border-b bg-white">
      <h1 className="font-black text-xl text-blue-700">ClauseLens AI</h1>

      <div className="flex gap-4">
        <Link href="/login" className="px-4 py-2 font-semibold">
          Login
        </Link>

        <Link
          href="/signup"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg font-bold shadow"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
