export function buildPayload(eventType, data) {
  return {
    event: eventType,
    data,
    sentAt: new Date().toISOString(),
  };
}