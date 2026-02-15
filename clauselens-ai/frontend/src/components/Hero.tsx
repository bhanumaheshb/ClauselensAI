import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center py-28 bg-gradient-to-b from-blue-50 to-white">
      <h2 className="text-5xl font-extrabold mb-6 leading-tight">
        Understand Contracts <br /> in Seconds
      </h2>

      <p className="text-lg text-gray-600 mb-10">
        AI-powered extraction, risk intelligence, and negotiation guidance.
      </p>

      <Link
        href="/signup"
        className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg"
      >
        Start Free
      </Link>
    </section>
  );
}
