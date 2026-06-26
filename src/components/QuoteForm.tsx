"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function QuoteForm({ dark = false }: { dark?: boolean }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [name, setName]       = useState("");
  const [phone, setPhone]     = useState("");
  const [email, setEmail]     = useState("");
  const [address, setAddress] = useState("");
  const [details, setDetails] = useState("");

  const inputClass = `w-full px-4 py-3 rounded-sm border text-sm outline-none transition-colors ${
    dark
      ? "bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#7DC143]"
      : "bg-white border-gray-200 text-[#1B4332] placeholder:text-gray-400 focus:border-[#7DC143]"
  }`;
  const labelClass = `block text-xs font-semibold tracking-widest uppercase mb-2 ${dark ? "text-white/60" : "text-[#1B4332]/60"}`;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, address, details }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      router.push("/thank-you");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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
        <label className={labelClass}>Property Address</label>
        <input type="text" placeholder="Address of the property" className={inputClass}
          value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div>
        <label className={labelClass}>Project Details</label>
        <textarea
          rows={6}
          placeholder="Tell us about your project, ideas, property, or any landscaping work you'd like completed."
          className={`${inputClass} resize-none`}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
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
        {loading ? "Sending…" : "Send Enquiry"}
      </button>
      <p className={`text-xs text-center ${dark ? "text-white/40" : "text-gray-400"}`}>
        We typically respond within one business day.
      </p>
    </form>
  );
}
