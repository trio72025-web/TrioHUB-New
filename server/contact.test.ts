import { describe, expect, it, vi } from 'vitest';
import { appRouter } from './routers';
import type { TrpcContext } from './_core/context';

// Mock the notifyOwner function
vi.mock('./_core/notification', () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createTestContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: 'https',
      headers: {},
    } as TrpcContext['req'],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext['res'],
  };
}

describe('contact.submit', () => {
  it('should accept valid contact form data', async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'I would like to know more about your services.',
    });

    expect(result.success).toBe(true);
    expect(result.message).toBeDefined();
  });

  it('should reject empty name', async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.contact.submit({
        name: '',
        email: 'john@example.com',
        message: 'Test message',
      });
      expect.fail('Should have thrown validation error');
    } catch (error: any) {
      expect(error.message).toContain('Name is required');
    }
  });

  it('should reject invalid email', async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.contact.submit({
        name: 'John Doe',
        email: 'invalid-email',
        message: 'Test message',
      });
      expect.fail('Should have thrown validation error');
    } catch (error: any) {
      expect(error.message).toContain('Invalid email address');
    }
  });

  it('should reject empty message', async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.contact.submit({
        name: 'John Doe',
        email: 'john@example.com',
        message: '',
      });
      expect.fail('Should have thrown validation error');
    } catch (error: any) {
      expect(error.message).toContain('Message is required');
    }
  });

  it('should handle contact form with special characters', async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "O'Brien & Co.",
      email: 'contact@example.com',
      message: 'We need help with "AI automation" & cybersecurity!',
    });

    expect(result.success).toBe(true);
  });

  it('should handle long messages', async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const longMessage = 'A'.repeat(1000);
    const result = await caller.contact.submit({
      name: 'John Doe',
      email: 'john@example.com',
      message: longMessage,
    });

    expect(result.success).toBe(true);
  });

  it('should handle multiple contact submissions', async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const result1 = await caller.contact.submit({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'First inquiry',
    });

    const result2 = await caller.contact.submit({
      name: 'Jane Smith',
      email: 'jane@example.com',
      message: 'Second inquiry',
    });

    expect(result1.success).toBe(true);
    expect(result2.success).toBe(true);
  });
});
