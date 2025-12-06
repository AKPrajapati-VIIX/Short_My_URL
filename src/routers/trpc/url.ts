
// import { publicProcedure } from "../trpc/context.js";

// // This is the router you will use to structure all your API routes.
// // -----------------------------------------------------------
import { urlController } from "../../controllers/url.controller.js";
import { router } from "./context.js";

export const urlRouter = router(urlController);

export const appRouter = router({
  // Your client will access this as trpc.url.create
  url: urlRouter,
});

// // // Export the type that the client uses to infer types.
export type AppRouter = typeof appRouter;






