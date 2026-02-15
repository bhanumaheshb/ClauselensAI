"use client";

import { useState } from "react";
import {
  Upload,
  AlertTriangle,
  FileText,
  GitCompare,
  Shield,
  Brain,
  Sparkles,
} from "lucide-react";
import { uploadAndAnalyze, compareVersions } from "@/lib/api";
import AICopilot from "@/components/AICopilot";

export default function Dashboard() {
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const [compareMode, setCompareMode] = useState(false);
  const [v1, setV1] = useState<File | null>(null);
  const [v2, setV2] = useState<File | null>(null);
  const [comparison, setComparison] = useState<any>(null);

  // ================= SINGLE =================
  const handleUpload = async (e: any) => {
    if (!e.target.files[0]) return;
    setLoading(true);
    try {
      const data = await uploadAndAnalyze(e.target.files[0]);
      setAnalysis(data);
      setCompareMode(false);
    } catch {
      alert("Backend not reachable");
    }
    setLoading(false);
  };

  // ================= COMPARE =================
  const handleCompare = async () => {
    if (!v1 || !v2) {
      alert("Upload both files");
      return;
    }

    setLoading(true);
    try {
      const data = await compareVersions(v1, v2);
      setComparison(data);
    } catch {
      alert("Comparison failed");
    }
    setLoading(false);
  };

  const riskCount = analysis?.risks
    ? analysis.risks.split("\n").filter((r: string) => r.trim()).length
    : 0;

  const clauseCount = analysis?.extraction
    ? Object.keys(analysis.extraction).length
    : 0;

  const verdict =
    riskCount > 5 ? "High Risk" : riskCount > 2 ? "Needs Review" : "Safe";

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-[#e7e2d9]">
      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center px-10 py-6 border-b border-[#242424]">
        <div>
          <h1 className="text-2xl font-black tracking-tight">
            ClauseLens AI
          </h1>
          <p className="text-xs text-gray-500">
            Autonomous Contract Intelligence Platform
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-green-400">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Engines Active
        </div>
      </div>

      {/* ================= BODY ================= */}
      <div className="max-w-[1500px] mx-auto p-8 space-y-6">
        {/* ================= MODE ================= */}
        <div className="flex gap-3">
          <button
            onClick={() => {
              setCompareMode(false);
              setComparison(null);
            }}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              !compareMode
                ? "bg-[#c6a75e] text-black"
                : "bg-[#141414] border border-[#242424] text-gray-400"
            }`}
          >
            Single
          </button>

          <button
            onClick={() => {
              setCompareMode(true);
              setAnalysis(null);
            }}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              compareMode
                ? "bg-[#7b3f3f] text-white"
                : "bg-[#141414] border border-[#242424] text-gray-400"
            }`}
          >
            Compare
          </button>
        </div>

        {/* ================= SINGLE ================= */}
        {!compareMode && (
          <>
            {/* Upload */}
            <div className="bg-[#0e0e11] border border-[#242424] rounded-2xl p-10 text-center">
              <Upload className="mx-auto mb-4 text-[#c6a75e]" size={32} />
              <h3 className="font-semibold mb-4 text-lg">
                Upload Contract for AI Intelligence
              </h3>

              <input
                type="file"
                id="fileUpload"
                className="hidden"
                onChange={handleUpload}
              />
              <label
                htmlFor="fileUpload"
                className="inline-block bg-[#c6a75e] hover:bg-[#b8964f] text-black px-8 py-3 rounded-xl font-semibold cursor-pointer transition"
              >
                {loading ? "Reading..." : "Select Document"}
              </label>
            </div>

            {!analysis && (
              <div className="bg-[#0e0e11] border border-[#242424] p-10 rounded-xl text-center text-gray-500">
                Awaiting document intelligence.
              </div>
            )}

            {analysis && (
              <>
                {/* ================= METRICS ================= */}
                <div className="grid grid-cols-4 gap-5">
                  <Metric
                    title="Confidence"
                    value={`${analysis.confidence}%`}
                    bg="bg-[#16213e]"
                    icon={<Shield size={16} />}
                  />
                  <Metric
                    title="Risks"
                    value={riskCount}
                    bg="bg-[#3a1f1f]"
                    icon={<AlertTriangle size={16} />}
                  />
                  <Metric
                    title="Clauses"
                    value={clauseCount}
                    bg="bg-[#241b2f]"
                    icon={<FileText size={16} />}
                  />
                  <Metric
                    title="Verdict"
                    value={verdict}
                    bg="bg-[#1f3a2b]"
                    icon={<Brain size={16} />}
                  />
                </div>

                {/* ================= ORGANIZATIONAL MEMORY ================= */}
                <div className="bg-[#0e0e11] border border-[#242424] rounded-2xl">
                  <div className="px-6 py-4 border-b border-[#242424] flex justify-between">
                    <div className="font-bold">Organizational Memory</div>
                    <div className="text-xs text-blue-400">
                      Learning System Active
                    </div>
                  </div>

                  <div className="p-6 grid grid-cols-3 gap-6 text-sm">
                    <MemoryCard
                      title="Precedent Match"
                      text="Similar to 14 previously approved vendor agreements."
                    />
                    <MemoryCard
                      title="Policy Alignment"
                      text="Liability cap exceeds internal baseline."
                    />
                    <MemoryCard
                      title="Typical Human Edit"
                      text="Legal team tightens termination language."
                    />
                  </div>
                </div>

                {/* ================= GRID ================= */}
                <div className="grid grid-cols-12 gap-6">
                  {/* LEFT */}
                  <div className="col-span-8 space-y-6">
                    <Panel title="Executive Summary">
                      {analysis.summary}
                    </Panel>

                    <Panel title="Risk Intelligence" danger>
                      {analysis.risks}
                    </Panel>

                    <Panel title="Extracted Structure">
                      <pre className="text-green-400 text-xs overflow-x-auto">
                        {JSON.stringify(analysis.extraction, null, 2)}
                      </pre>
                    </Panel>

                    <Panel title="Negotiation Strategy" success>
                      {analysis.negotiation}
                    </Panel>
                  </div>

                  {/* RIGHT */}
                  <div className="col-span-4">
                    <AICopilot extraction={analysis.extraction} />
                  </div>
                </div>
              </>
            )}
          </>
        )}

        {/* ================= COMPARE ================= */}
        {compareMode && (
          <>
            <div className="grid grid-cols-2 gap-6">
              <UploadBox title="Base Version" setFile={setV1} file={v1} />
              <UploadBox title="New Version" setFile={setV2} file={v2} />
            </div>

            <button
              onClick={handleCompare}
              className="bg-[#7b3f3f] px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition"
            >
              <GitCompare size={18} />
              {loading ? "Analyzing..." : "Run Semantic Comparison"}
            </button>

            {comparison && (
              <Panel title="Semantic Differences">
                {comparison.comparison}
              </Panel>
            )}
          </>
        )}
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Metric({ title, value, bg, icon }: any) {
  return (
    <div className={`${bg} rounded-2xl p-5`}>
      <div className="flex justify-between items-center text-xs text-gray-300">
        {title}
        {icon}
      </div>
      <div className="text-3xl font-black mt-3">{value}</div>
    </div>
  );
}

function Panel({ title, children, danger, success }: any) {
  const style = danger
    ? "border-[#3a1f1f] bg-[#140d0d]"
    : success
    ? "border-[#1f3a2b] bg-[#0e1a14]"
    : "border-[#242424] bg-[#0e0e11]";

  return (
    <div className={`border ${style} rounded-2xl`}>
      <div className="px-6 py-4 border-b border-[#242424] font-bold flex gap-2 items-center">
        <Sparkles size={16} />
        {title}
      </div>
      <div className="p-6 text-sm whitespace-pre-wrap text-gray-300">
        {children}
      </div>
    </div>
  );
}

function UploadBox({ title, setFile, file }: any) {
  return (
    <div className="bg-[#0e0e11] border border-[#242424] rounded-xl p-6">
      <p className="font-bold mb-3">{title}</p>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0])} />
      {file && <p className="text-xs mt-2 text-green-400">✅ {file.name}</p>}
    </div>
  );
}

function MemoryCard({ title, text }: any) {
  return (
    <div className="bg-black/30 border border-[#242424] rounded-xl p-4">
      <div className="font-bold mb-2">{title}</div>
      <p className="text-gray-400 text-xs">{text}</p>
    </div>
  );
}
