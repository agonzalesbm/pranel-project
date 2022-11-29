// @ts-nocheck
import { error } from '@sveltejs/kit';

const MESSAGE_404 = 'Page not found'

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
    const sliceTexted = url.pathname.split("/");
    const [, table, id] = sliceTexted;
    console.log(table, id)
    try {
        const res = await fetch(`http://localhost:5173/api/get-product?p=${table}&id=${id}`)
        const json = await res.json()

        const suggestedProducts = await fetch(`http://localhost:5173/api/get-products-by-color?p=${table}&c=${json.color}`)
        const jsonSuggestedProducts = await suggestedProducts.json()

        if (jsonSuggestedProducts.length < 4) {
            const productsByPrice = await fetch(`http://localhost:5173/api/get-products-by-price?p=${table}&price=${json.price}`)
            const jsonByPrice = await productsByPrice.json()
            return { ...json, suggested: [...jsonSuggestedProducts, ...jsonByPrice] }
        }

        if (json.message && json.message === MESSAGE_404) {
            throw error(404, MESSAGE_404)
        }
        return { ...json, suggested: [...jsonSuggestedProducts] }
    } catch (error) {
        throw error(404, MESSAGE_404)
    }

}