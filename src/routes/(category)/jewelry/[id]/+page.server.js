// @ts-nocheck
import { getProducts, getSuggestions } from '$lib/services/endpoint';

const MESSAGE_404 = 'Page not found'

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
    const sliceTexted = url.pathname.split("/");
    const [, table, id] = sliceTexted;
    try {
        return { product: getProducts(table, id), suggested: getSuggestions(table, id) }
    } catch (error) {
        throw error(404, MESSAGE_404)
    }
}
