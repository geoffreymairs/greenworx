"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/heic", "image/heif"];
const ACCEPTED_EXTS  = [".jpg", ".jpeg", ".png", ".heic", ".heif"];
const MAX_FILE_BYTES = 20 * 1024 * 1024; // 20 MB per file
const MAX_FILES      = 10;

interface PhotoFile {
  file: File;
  id:   string;
}

const inputClass =
  "w-full px-4 py-3 rounded-sm border border-gray-200 bg-white text-[#1B4332] placeholder:text-gray-400 text-sm outline-none transition-colors focus:border-[#7DC143]";
const labelClass =
  "block text-xs font-semibold tracking-widest uppercase mb-2 text-[#1B4332]/60";

export default function ContactForm() {
  const router = useRouter();
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState<string | null>(null);

  const [name, setName]       = useState("");
  const [phone, setPhone]     = useState("");
  const [email, setEmail]     = useState("");
  const [address, setAddress] = useState("");
  const [details, setDetails] = useState("");
  const [photos, setPhotos]   = useState<PhotoFile[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // ── Photo handling ─────────────────────────────────────────────────────────

  function handleFiles(incoming: FileList | null) {
    if (!incoming) return;
    const fileArr = Array.from(incoming);
    const errors: string[] = [];
    const valid: PhotoFile[] = [];

    for (const file of fileArr) {
      const ext  = "." + file.name.split(".").pop()?.toLowerCase();
      const mime = file.type.toLowerCase();

      const typeOk = ACCEPTED_TYPES.includes(mime) || ACCEPTED_EXTS.includes(ext);
      if (!typeOk) {
        errors.push(`"${file.name}" is not a supported format (JPG, PNG, HEIC, HEIF only).`);
        continue;
      }
      if (file.size > MAX_FILE_BYTES) {
        errors.push(`"${file.name}" exceeds the 20 MB limit.`);
        continue;
      }
      valid.push({ file, id: crypto.randomUUID() });
    }

    setPhotos((prev) => {
      const combined = [...prev, ...valid];
      if (combined.length > MAX_FILES) {
        errors.push(`Maximum ${MAX_FILES} photos allowed. Only the first ${MAX_FILES} were kept.`);
        return combined.slice(0, MAX_FILES);
      }
      return combined;
    });

    if (errors.length) setError(errors.join(" "));
    else setError(null);

    // Reset input so the same file can be re-added after removal
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function removePhoto(id: string) {
    setPhotos((prev) => prev.filter((p) => p.id !== id));
    setError(null);
  }

  function formatBytes(bytes: number) {
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  // ── Submit ─────────────────────────────────────────────────────────────────

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const fd = new FormData();
      fd.append("name",    name);
      fd.append("phone",   phone);
      fd.append("email",   email);
      fd.append("address", address);
      fd.append("details", details);
      photos.forEach(({ file }) => fd.append("photos", file));

      const res = await fetch("/api/contact", { method: "POST", body: fd });

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

  // ── Form ───────────────────────────────────────────────────────────────────

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Name + Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input
            type="text" required placeholder="Your full name"
            className={inputClass} value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass}>Phone Number *</label>
          <input
            type="tel" required placeholder="Your phone number"
            className={inputClass} value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className={labelClass}>Email Address *</label>
        <input
          type="email" required placeholder="your@email.com"
          className={inputClass} value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Property Address — required */}
      <div>
        <label className={labelClass}>Property Address *</label>
        <input
          type="text" required placeholder="Address of the property"
          className={inputClass} value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      {/* Project Details */}
      <div>
        <label className={labelClass}>Project Details</label>
        <textarea
          rows={5}
          placeholder="Tell us about your project, ideas, property, or any landscaping work you'd like completed."
          className={`${inputClass} resize-none`}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </div>

      {/* Photo upload */}
      <div>
        <label className={labelClass}>Photos <span className="normal-case font-normal text-gray-400">(optional)</span></label>

        {/* Drop zone */}
        <label
          className="flex flex-col items-center justify-center w-full px-6 py-8 rounded-sm border-2 border-dashed border-gray-200 bg-white hover:border-[#7DC143] hover:bg-[#f9fbf7] transition-colors cursor-pointer group"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => { e.preventDefault(); handleFiles(e.dataTransfer.files); }}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".jpg,.jpeg,.png,.heic,.heif,image/jpeg,image/png,image/heic,image/heif"
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
          <div className="w-12 h-12 rounded-sm bg-[#F8F7F4] group-hover:bg-[#7DC143]/10 flex items-center justify-center mb-3 transition-colors">
            <svg className="w-6 h-6 text-[#1B4332]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-sm font-medium text-[#1B4332]">Click to upload or drag and drop</p>
          <p className="text-xs text-gray-400 mt-1">JPG, PNG, HEIC, HEIF &mdash; max 20 MB per photo</p>
        </label>

        {/* Photo preview list */}
        {photos.length > 0 && (
          <ul className="mt-3 space-y-2">
            {photos.map(({ file, id }) => (
              <li key={id} className="flex items-center justify-between bg-[#F8F7F4] rounded-sm px-4 py-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded bg-[#1B4332]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#1B4332]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-[#1B4332] font-medium truncate">{file.name}</p>
                    <p className="text-xs text-gray-400">{formatBytes(file.size)}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removePhoto(id)}
                  className="ml-4 text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                  aria-label={`Remove ${file.name}`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Error */}
      {error && (
        <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-sm px-4 py-3">
          {error}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#7DC143] hover:bg-[#5E9A30] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-sm transition-colors tracking-wide text-sm uppercase"
      >
        {loading ? "Sending…" : "Send Enquiry"}
      </button>
      <p className="text-xs text-center text-gray-400">
        We typically respond within one business day.
      </p>
    </form>
  );
}
