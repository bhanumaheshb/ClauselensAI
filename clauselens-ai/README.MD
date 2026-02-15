# 🚀 ClauseLens AI  
### Multimodal Contract Intelligence & Risk Copilot

ClauseLens AI is an enterprise-grade document intelligence platform that reads contracts like a human, extracts structure, detects risk, and answers questions with grounded evidence.

Built for legal, procurement, finance, and compliance teams.

---

## ✨ What Makes ClauseLens Different

Most document AI tools only summarize text.

ClauseLens:

✅ reads messy PDFs  
✅ understands scans & images  
✅ processes handwriting  
✅ extracts tables & forms  
✅ compares document versions  
✅ performs grounded Q&A  
✅ provides negotiation guidance  
✅ survives API failures with automatic failover  

---

## 🧠 Core Capabilities

### 📄 Multimodal Understanding
We ingest:

- Printed text  
- Low-quality scans  
- Images  
- Tables  
- Forms  
- Signatures  
- Handwritten notes  

No manual retyping required.

---

### ⚠️ Clause & Risk Intelligence
ClauseLens detects business impact, not just keywords.

Examples:

🔴 unlimited liability  
🟠 auto-renewal  
🟡 unclear penalties  

---

### 🔄 Version Comparison
Upload two agreements → understand:

✔ what changed  
✔ why it matters  
✔ risk increase / reduction  

This is **semantic difference**, not simple text diff.

---

### 💡 Smart Suggestions
Acts like an AI legal assistant.

Recommends:

✔ missing protections  
✔ compliance improvements  
✔ stronger negotiation language  

---

### 💬 Grounded Conversational Q&A
Ask questions like:

- Who is liable?
- Is auto-renewal present?
- What is termination notice?

Answers are generated **only from document evidence**.

No hallucinations.

---

### 📊 Confidence Scoring
Each answer includes a confidence level to guide human review.

---

## 🏗️ System Architecture

ClauseLens runs as a multi-stage intelligence pipeline.

### Stage 1 — Preprocessing
PDF → split → deskew → denoise → enhance  
Improves extraction accuracy dramatically.

### Stage 2 — Multi-Method Extraction
We combine multiple engines:

- PDFPlumber → digital text  
- Tesseract → OCR  
- LLaVA → layout & visual understanding  
- Camelot → tables  

This eliminates blind spots.

### Stage 3 — Structured Storage
Each page is:

✔ stored  
✔ embedded  
✔ indexed  

for fast semantic retrieval.

### Stage 4 — Retrieval Augmented Reasoning (RAG)
When a question is asked:

1. Retrieve relevant pages  
2. Verify evidence  
3. LLM answers using facts  

---

## 🔒 Grounded AI Guarantee

We enforce:

**Retrieve → Verify → Answer**

If evidence is missing → system returns **Not Found**.

---

## 🤖 AI Provider Failover (100% Uptime)

External APIs fail.  
ClauseLens keeps running.

Priority:

1. Gemini  
2. Claude  
3. HuggingFace  
4. Local LLaVA  
5. Local Mistral  
6. Safe Demo Mode  

Automatic switching ensures continuous operation.

---

## 🧩 Tech Stack

### Backend
- FastAPI  
- Python  
- Ollama  
- Mistral  
- LLaVA  
- Tesseract  
- PDFPlumber  
- Camelot  
- Sentence Transformers  
- ChromaDB  

### Frontend
- Next.js  
- React  
- Tailwind  
- Framer Motion  
- Lucide Icons  

---

## ⚡ Performance

50-page contracts → processed in seconds.

Massive reduction in manual legal review time.

---

## 🏢 Enterprise Ready

✔ structured outputs  
✔ audit traceability  
✔ explainable answers  
✔ failover reliability  
✔ vendor independence  




🎯 Target Users

Legal teams
Procurement
Vendor risk
Finance
Compliance