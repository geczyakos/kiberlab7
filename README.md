# webhook-toolkit

A small, dependency-light library for registering, dispatching, and
verifying webhooks: retries with backoff, event filtering, signature
verification, and delivery status tracking.

## Installation

​```
npm install webhook-toolkit
​```

## Utilities

- `createWebhookRegistry` – register/list/remove webhook subscriptions
- `dispatchWebhook` – sends a payload with automatic retries
- `computeBackoffDelay` – exponential backoff calculation
- `shouldDeliver` – filters deliveries by event type
- `logDeliveryAttempt` – records a delivery attempt
- `buildPayload` – builds a standard event payload envelope
- `withTimeout` – wraps a promise with a timeout
- `verifySignature` – verifies an incoming webhook's HMAC signature
- `createStatusTracker` – tracks per-webhook delivery status
- `createPauseControls` – pause/resume webhook delivery
- `dispatchBatch` – dispatches multiple webhooks concurrently
- `pingWebhook` – health-checks a webhook endpoint

## Usage

import { createWebhookRegistry, dispatchWebhook } from 'webhook-toolkit';

const registry = createWebhookRegistry();
registry.register('orders', { defaultUrl: 'https://example.com/hooks/orders' });

await dispatchWebhook(registry.get('orders').defaultUrl, { event: 'order.shipped' });


## License

MIT