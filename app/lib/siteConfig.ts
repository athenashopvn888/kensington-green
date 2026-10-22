/**
 * Explicit false / 0 / no / off is a hard cigarette override for the feed
 * decision helpers. An empty or unset value is not that override.
 * Kensington's coded hide switch lives in showCigarettes.ts.
 */
function hardOffRaw(raw: string | undefined): string | undefined {
  if (raw !== undefined) return raw;
  return process.env.SHOW_CIGARETTES ?? process.env.NEXT_PUBLIC_SHOW_CIGARETTES;
}

export function cigaretteEnvHardOff(raw: string | undefined = hardOffRaw(undefined)): boolean {
  if (raw == null) return false;
  return /^(0|false|no|off)$/i.test(raw.trim());
}
