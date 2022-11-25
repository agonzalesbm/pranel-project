// @ts-nocheck
import { error, json } from '@sveltejs/kit';
import { fileLoader } from '$lib/services/firestore';

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ url }) => {
    const product = url.searchParams.get('p')
    const id = url.searchParams.get('id')
    const result = await fileLoader(product, id)
    if (!result) {
        throw error(404, "Page not found")
    }
    return json(result)
}