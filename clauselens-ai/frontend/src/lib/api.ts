const API = "http://127.0.0.1:8000";

export async function uploadAndAnalyze(file: File) {
  const form = new FormData();
  form.append("file", file);

  const res = await fetch(`${API}/analyze`, {
    method: "POST",
    body: form,
  });

  if (!res.ok) throw new Error("Analyze failed");
  return res.json();
}

export async function compareVersions(file1: File, file2: File) {
  const form = new FormData();
  form.append("file1", file1);
  form.append("file2", file2);

  const res = await fetch(`${API}/compare`, {
    method: "POST",
    body: form,
  });

  if (!res.ok) throw new Error("Compare failed");
  return res.json();
}

export async function askDocument(question: string, extraction: any) {
  const res = await fetch(`${API}/ask`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question, extraction }),
  });

  if (!res.ok) throw new Error("Chat failed");
  return res.json();
}
// ================= AUTH =================

export async function registerUser(data: {
  name: string;
  email: string;
  password: string;
}) {
  const res = await fetch(`${API}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Register failed");
  return res.json();
}

export async function loginUser(data: {
  email: string;
  password: string;
}) {
  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Login failed");
  return res.json();
}
