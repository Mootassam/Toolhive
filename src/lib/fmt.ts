// Client-safe string formatter: "Hello {name}" + {name: "X"}
export function fmtc(s: string, vars: Record<string, string | number> = {}) {
  return s.replace(/\{(\w+)\}/g, (_, k) => (k in vars ? String(vars[k]) : `{${k}}`));
}
