export function createPauseControls() {
  const paused = new Set();
  return {
    pause(webhookId) {
      paused.add(webhookId);
    },
    resume(webhookId) {
      paused.delete(webhookId);
    },
    isPaused(webhookId) {
      return paused.has(webhookId);
    },
  };
}