import { computeBackoffDelay } from '../src/backoff';

test('doubles the delay each attempt, capped at maxMs', () => {
  expect(computeBackoffDelay(0, 500, 30000)).toBe(500);
  expect(computeBackoffDelay(1, 500, 30000)).toBe(1000);
  expect(computeBackoffDelay(2, 500, 30000)).toBe(2000);
  expect(computeBackoffDelay(10, 500, 30000)).toBe(30000);
});