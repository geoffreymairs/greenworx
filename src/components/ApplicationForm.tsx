"use client";

import { useState } from "react";

export default function ApplicationForm() {
  const [submitted, setSubmitted]   = useState(false);
  const [loading, setLoading]       = useState(false);
  const [error, setError]           = useState<string | null>(null);
  const [fileName, setFileName]     = useState<string | null>(null);

  const [name, setName]             = useState("");
  const [phone, setPhone]           = useState("");
  const [email, setEmail]           = useState("");
  const [experience, setExperience] = useState("");
  const [cvFile, setCvFile]         = useState<File | null>(null);

  const inputClass =
    "w-full px-4 py-3 rounded-sm border border-gray-200 bg-white text-[#1B4332] placeholder:text-gray-400 text-sm outline-none transition-colors focus:border-[#7DC143]";
  const labelClass =
    "block text-xs font-semibold tracking-widest uppercase mb-2 text-[#1B4332]/60";

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    setCvFile(file);
    setFileName(file?.name ?? null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const fd = new FormData();
      fd.append("name", name);
      fd.append("phone", phone);
      fd.append("email", email);
      fd.append("experience", experience);
      if (cvFile) fd.append("cv", cvFile);

      const res = await fetch("/api/apply", { method: "POST", body: fd });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-[#F8F7F4] rounded-sm p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-[#7DC143] flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3
          className="text-2xl font-bold text-[#1B4332] mb-3"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Application Received
        </h3>
        <p className="text-gray-500 max-w-sm mx-auto">
          Thanks for your interest in joining Greenworx. Devon will review your application and be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input type="text" required placeholder="Your full name" className={inputClass}
            value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label className={labelClass}>Phone Number *</label>
          <input type="tel" required placeholder="Your phone number" className={inputClass}
            value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
      </div>
      <div>
        <label className={labelClass}>Email Address *</label>
        <input type="email" required placeholder="your@email.com" className={inputClass}
          value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label className={labelClass}>Experience Summary *</label>
        <textarea
          required
          rows={5}
          placeholder="Tell us about your landscaping experience, skills, qualifications and what you're looking for."
          className={`${inputClass} resize-none`}
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
      </div>
      <div>
        <label className={labelClass}>Upload CV</label>
        <label className="flex items-center gap-4 w-full px-4 py-4 rounded-sm border border-dashed border-gray-300 bg-white hover:border-[#7DC143] transition-colors cursor-pointer group">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={handleFileChange}
          />
          <div className="w-10 h-10 rounded-sm bg-[#F8F7F4] group-hover:bg-[#7DC143]/10 flex items-center justify-center flex-shrink-0 transition-colors">
            <svg className="w-5 h-5 text-[#1B4332]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
          </div>
          <div>
            {fileName ? (
              <p className="text-sm text-[#1B4332] font-medium">{fileName}</p>
            ) : (
              <>
                <p className="text-sm text-gray-600 font-medium">Choose file or drag and drop</p>
                <p className="text-xs text-gray-400 mt-0.5">PDF, DOC or DOCX — max 5MB</p>
              </>
            )}
          </div>
        </label>
      </div>

      {error && (
        <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-sm px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#7DC143] hover:bg-[#5E9A30] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-sm transition-colors tracking-wide text-sm uppercase"
      >
        {loading ? "Submitting…" : "Submit Application"}
      </button>
      <p className="text-xs text-center text-gray-400">
        We review all applications and will be in touch within a few business days.
      </p>
    </form>
  );
}
