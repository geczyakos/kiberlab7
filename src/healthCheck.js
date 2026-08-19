export async function pingWebhook(url) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    return res.ok;
  } catch (_) {
    return false;
  }
}