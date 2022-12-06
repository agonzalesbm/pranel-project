// @ts-nocheck
import { error } from '@sveltejs/kit';
import { getProducts, getSuggestions } from "$lib/services/endpoint";
import { isInProduct } from '$lib/services/store';

const MESSAGE_404 = 'Page not found'
export const prerender = true;
/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
    isInProduct.set(true)
    const sliceTexted = url.pathname.split("/");
    const [, table, id] = sliceTexted;
    try {
        return { product: getProducts(table, id), suggested: getSuggestions(table, id) }
    } catch (error) {
        throw error(404, MESSAGE_404)
    }

}