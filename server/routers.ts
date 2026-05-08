import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1, 'Name is required').trim(),
        email: z.string().email('Invalid email address').trim(),
        message: z.string().min(1, 'Message is required').trim(),
      }))
      .mutation(async ({ input }) => {
        try {
          // Send notification to owner
          await notifyOwner({
            title: 'New Contact Form Submission from TrioHUB Website',
            content: `Name: ${input.name}\nEmail: ${input.email}\nMessage: ${input.message}`,
          });

          return {
            success: true,
            message: 'Your message has been sent successfully!',
          };
        } catch (error) {
          console.error('Failed to send contact notification:', error);
          // Still return success to user even if notification fails
          return {
            success: true,
            message: 'Your message has been received!',
          };
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
