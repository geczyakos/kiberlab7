export async function dispatchWebhook(url, payload, options = {}) {
  const maxRetries = options.maxRetries ?? 3;
  let attempt = 0;
  let lastError;

  while (attempt < maxRetries) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) return res;
      lastError = new Error(`Webhook responded with status ${res.status}`);
    } catch (err) {
      lastError = err;
    }
    attempt += 1;
  }

  throw lastError;
}