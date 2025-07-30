import Elysia, { error, type ElysiaConfig } from "elysia";
import { db } from "./db";
import { auth } from "./lib/auth";

// Define the context types based on protection level
type ProtectedContext = {
  user: NonNullable<Awaited<ReturnType<typeof db.user.findUnique>>>;
  db: typeof db;
};

type UnprotectedContext = {
  user: Awaited<ReturnType<typeof db.user.findUnique>> | null;
  db: typeof db;
};

// Single, more flexible overload for createContext
export function createContext<T extends boolean>(protectedRoute: T): Elysia<
  "",
  {
    request: Record<string, never>;
    store: Record<string, never>;
    derive: T extends true ? ProtectedContext : UnprotectedContext;
    resolve: Record<string, never>;
    decorator: Record<string, never>;
  }
>;

// Implementation
export function createContext(protectedRoute: boolean): any {
  return new Elysia()
    .derive(async ({ request: { headers } }) => {
      const session = await auth.api.getSession({
        headers,
      });

      if (!session) {
        if (protectedRoute) throw error(401);
        return {
          user: null,
          db,
        };
      }

      const userData = await db.user.findUnique({
        where: {
          id: session.user.id,
        },
      });

      if (!userData) {
        if (protectedRoute) throw error(401);
        return {
          user: null,
          db,
        };
      }

      return {
        db,
        user: userData,
      };
    })
    .as("plugin");
}

// Factory function overloads (remain the same)
export function createElysia<P extends string = "">(
  config: ElysiaConfig<P> & { protectedRoute: true },
): Elysia<
  P,
  {
    request: Record<string, never>;
    store: Record<string, never>;
    derive: ProtectedContext;
    resolve: Record<string, never>;
    decorator: Record<string, never>;
  }
>;

export function createElysia<P extends string = "">(
  config?: ElysiaConfig<P> & { protectedRoute?: false },
): Elysia<
  P,
  {
    request: Record<string, never>;
    store: Record<string, never>;
    derive: UnprotectedContext;
    resolve: Record<string, never>;
    decorator: Record<string, never>;
  }
>;

// Implementation - compatible with both overloads
export function createElysia<P extends string = "">(
  config?: ElysiaConfig<P> & { protectedRoute?: boolean },
): any {
  return new Elysia(config).use(createContext(config?.protectedRoute || false));
}