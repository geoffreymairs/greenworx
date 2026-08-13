"use client";

/**
 * Hidden honeypot field. It is visually removed from the page and hidden from
 * assistive tech + keyboard navigation, so genuine users never interact with it.
 * Automated bots that fill every field will populate it, revealing themselves.
 */
export default function HoneypotField({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: "-9999px",
        top: "-9999px",
        height: 0,
        width: 0,
        overflow: "hidden",
      }}
    >
      <label>
        Company (leave this field empty)
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}
