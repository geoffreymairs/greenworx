import { BUDGET_OPTIONS } from "@/lib/budget";

export default function BudgetSelect({
  value,
  onChange,
  inputClass,
  labelClass,
  dark = false,
}: {
  value: string;
  onChange: (value: string) => void;
  inputClass: string;
  labelClass: string;
  dark?: boolean;
}) {
  return (
    <div>
      <label htmlFor="budget" className={labelClass}>Budget *</label>
      <select
        id="budget"
        name="budget"
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputClass} appearance-none cursor-pointer ${value ? "" : dark ? "text-white/40" : "text-gray-400"}`}
      >
        <option value="" disabled className="text-gray-400">
          Select your budget
        </option>
        {BUDGET_OPTIONS.map((option) => (
          <option key={option} value={option} className="text-[#1B4332]">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
