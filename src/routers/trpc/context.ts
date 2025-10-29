import { initTRPC } from '@trpc/server';
import superjson from 'superjson'; // 👈 1. Import SuperJSON on the backend

// This is where you would define your context type (Auth, DB connection, etc.)

const t = initTRPC.context().create({
    // transformer: superjson,  
});

export const router = t.router;
export const publicProcedure = t.procedure;