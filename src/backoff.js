export function computeBackoffDelay(attempt, baseMs = 500, maxMs = 30000) {
  const delay = baseMs * Math.pow(2, attempt);
  return Math.min(delay, maxMs);
}