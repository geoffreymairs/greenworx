export const BUDGET_OPTIONS = [
  "$0-5K",
  "$5-10K",
  "$10-25K",
  "$25-50K",
  "$50-100K",
  "$100K+",
] as const;

export type BudgetOption = (typeof BUDGET_OPTIONS)[number];

export function parseBudget(value: unknown): BudgetOption | null {
  const str = String(value ?? "").trim();
  return (BUDGET_OPTIONS as readonly string[]).includes(str) ? (str as BudgetOption) : null;
}

export function withBudget(budget: string, details: string) {
  return `Budget: ${budget}${details ? `\n\n${details}` : ""}`;
}
