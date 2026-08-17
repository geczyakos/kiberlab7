export function logDeliveryAttempt(logs, webhookId, attempt, result) {
  logs.push({ webhookId, attempt, result, timestamp: Date.now() });
  return logs;
}