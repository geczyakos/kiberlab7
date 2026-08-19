export async function dispatchBatch(deliveries) {
  return Promise.allSettled(deliveries.map(({ url, payload }) => fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })));
}