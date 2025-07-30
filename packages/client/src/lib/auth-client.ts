import { createAuthClient } from "better-auth/svelte"
import { appUrls } from "shared"
export const authClient = createAuthClient({
    baseURL: appUrls.backend,
    basePath: "auth"
})
