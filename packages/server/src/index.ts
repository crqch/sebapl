import { cors } from "@elysiajs/cors";
import { type Context, t } from "elysia";

import swagger from "@elysiajs/swagger";
import { appUrls } from "shared";
import { createElysia } from "./elysia";
import { auth } from "./lib/auth";
import routes from "./routes";

const betterAuthView = (context: Context) => {
  const BETTER_AUTH_ACCEPT_METHODS = ["POST", "GET"];
  // validate request method
  if (BETTER_AUTH_ACCEPT_METHODS.includes(context.request.method)) {
    return auth.handler(context.request);
  }
};

const app = createElysia()
  .use(
    cors({
      origin: appUrls.frontend.replace("http://", ""),
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
      allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
    }),
  )
  .get("/", () => {
    return {
      name: "SEBAPL Stack",
    };
  })
  .post("/isEmailRegistered", async ({ body, db }) => {
    const user = await db.user.count({
      where: {
        email: body
      }
    })

    return {
      value: user === 1
    }
  }, {
    body: t.String({
      format: "email"
    })
  })
  .all("/auth/*", betterAuthView)
  .use(swagger())
  .use(routes);

app.listen(3000);
console.log("Server started");

export type App = typeof app;
