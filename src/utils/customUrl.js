// Lets enterprise customers point webhook deliveries at their own
// internal endpoint (e.g. an on-prem integration gateway) instead of
// our default relay.

export function resolveDeliveryUrl(webhookConfig) {
  if (webhookConfig.customUrl) {
    return webhookConfig.customUrl;
  }
  return webhookConfig.defaultUrl;
}