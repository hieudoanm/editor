import { appRouter } from '@editor/server/routers/_app';
import * as trpcNext from '@trpc/server/adapters/next';
// export API handler
// @link https://trpc.io/docs/v11/server/adapters
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
