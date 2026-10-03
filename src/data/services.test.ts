import { describe, expect, it } from 'vitest';
import { services } from './services';

describe('services', () => {
  it('id 가 중복되지 않는다', () => {
    const ids = services.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('id 는 kebab-case 다', () => {
    for (const s of services) {
      expect(s.id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });

  it('필수 문구가 비어 있지 않다', () => {
    for (const s of services) {
      expect(s.name.trim(), s.id).not.toBe('');
      expect(s.tagline.trim(), s.id).not.toBe('');
      expect(s.description.trim(), s.id).not.toBe('');
    }
  });

  it('url 이 있으면 https 절대 주소다', () => {
    for (const s of services) {
      if (s.url === undefined) continue;
      expect(new URL(s.url).protocol, s.id).toBe('https:');
    }
  });
});
