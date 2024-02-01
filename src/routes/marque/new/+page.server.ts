import prisma from "$lib/prisma";
import type { Actions } from "./$types";

export const actions = {
    async default(event) {
        const formData = Object.fromEntries((await event.request.formData()).entries())
        const nom = formData.nom;
        if (typeof nom == "string") {
            prisma.marque.create({
                data: {
                    nom
                }
            })
        }
    }
} satisfies Actions;