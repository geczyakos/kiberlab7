export function createStatusTracker() {
  const statuses = new Map();
  return {
    setStatus(webhookId, status) {
      statuses.set(webhookId, status);
    },
    getStatus(webhookId) {
      return statuses.get(webhookId) || 'unknown';
    },
  };
}