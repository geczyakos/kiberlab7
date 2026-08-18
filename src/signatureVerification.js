import crypto from 'crypto';

// Verifies that an incoming webhook's signature header matches the
// HMAC of its raw body, computed with the receiver's shared secret.

export function verifySignature(rawBody, signatureHeader, secret) {
  const expected = crypto.createHmac('sha256', secret).update(rawBody).digest('hex');
  return expected === signatureHeader;
}