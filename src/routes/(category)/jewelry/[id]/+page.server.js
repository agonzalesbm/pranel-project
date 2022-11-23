// @ts-nocheck
import { error } from '@sveltejs/kit';

const MESSAGE_404 = 'Page not found'

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
    const sliceTexted = url.pathname.split("/");
    const [, table, id] = sliceTexted;
    console.log(table, id)
    try {
        const res = await fetch(`http://localhost:5173/api/get-product?p=rings&id=${id}`)
        const json = await res.json()
        if (json.message && json.message === MESSAGE_404) {
            throw error(404, MESSAGE_404)
        }
        return json
    } catch (error) {
        throw error(404, MESSAGE_404)
    }
}
