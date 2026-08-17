export function shouldDeliver(webhookConfig, eventType) {
  if (!webhookConfig.eventTypes || webhookConfig.eventTypes.length === 0) return true;
  return webhookConfig.eventTypes.includes(eventType);
}