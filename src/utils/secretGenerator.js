// Generates a per-webhook secret used to sign outgoing payloads, so
// receivers can verify a delivery really came from us.

export function generateWebhookSecret(length = 32) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let secret = '';
  for (let i = 0; i < length; i++) {
    secret += chars[Math.floor(Math.random() * chars.length)];
  }
  return secret;
}