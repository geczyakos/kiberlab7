export function createWebhookRegistry() {
  const webhooks = new Map();

  return {
    register(id, config) {
      webhooks.set(id, config);
    },
    list() {
      return Array.from(webhooks.entries()).map(([id, config]) => ({ id, ...config }));
    },
    remove(id) {
      return webhooks.delete(id);
    },
    get(id) {
      return webhooks.get(id);
    },
  };
}