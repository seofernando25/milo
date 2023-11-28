import { goto } from "$app/navigation";
import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions = {
	default: async (event) => {
		throw redirect(302, "/picnic/date-picker");
	},
} satisfies Actions;
