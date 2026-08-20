import { createWebhookRegistry } from '../src/webhookRegistry';

test('registers, lists, and removes webhooks', () => {
  const registry = createWebhookRegistry();
  registry.register('wh1', { defaultUrl: 'https://example.com/hook' });

  expect(registry.list()).toEqual([{ id: 'wh1', defaultUrl: 'https://example.com/hook' }]);

  registry.remove('wh1');
  expect(registry.list()).toEqual([]);
});