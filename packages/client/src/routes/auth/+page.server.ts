import { api } from "$lib/backend";
import { error, redirect, type Actions } from "@sveltejs/kit";
import { z } from 'zod';

const emailSchema = z.object({
    email: z.email()
})

export const actions: Actions = {
    default: async (event) => {
        const data = await event.request.formData()
        const formData = Object.fromEntries(data);
        const validate = emailSchema.safeParse(formData)
        if (validate.success) {
            const r = await api.isEmailRegistered.post(validate.data.email)
            console.log(r.data, validate.data.email)
            if (r.error) {
                return error(500)
            } else {
                redirect(303, (r.data.value ? "/auth/login" : "/auth/register") + "?email=" + validate.data.email)
            }
        } else {
            return error(400, validate.error)
        }
    }
}