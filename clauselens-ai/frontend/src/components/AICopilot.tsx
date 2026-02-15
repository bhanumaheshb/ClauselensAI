"use client";

import { useState } from "react";

export default function AICopilot({ extraction }: { extraction: any }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const ask = async () => {
    if (!question) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("http://127.0.0.1:8000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, extraction }),
      });

      const data = await res.json();
      setAnswer(data.answer);
    } catch {
      setAnswer("AI unavailable.");
    }

    setLoading(false);
  };

  return (
    <div className="mt-10 bg-[#111113] border border-[#232326] rounded-xl p-6">
      <div className="font-bold mb-4">AI Copilot</div>

      {/* Input */}
      <div className="flex gap-3">
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask something about the contract..."
          className="flex-1 bg-black border border-[#2a2a2f] rounded-lg px-4 py-2 text-sm outline-none focus:border-[#d4af37]"
        />

        <button
          onClick={ask}
          className="bg-[#d4af37] text-black px-4 rounded-lg font-bold hover:scale-105 transition"
        >
          Ask
        </button>
      </div>

      {/* Output */}
      <div className="mt-4 text-sm whitespace-pre-wrap text-gray-300 min-h-[40px]">
        {loading ? "🧠 AI thinking..." : answer}
      </div>
    </div>
  );
}
