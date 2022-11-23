// @ts-nocheck
import { error } from '@sveltejs/kit';
import { fileLoader } from '../../../../services/firestore'

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
    const sliceTexted = url.pathname.split("/");
    const [, table, id] = sliceTexted;
    console.log(table, id)
    try {
        const res = await fetch(`http://localhost:5173/api/get-product?p=rings&id=${id}`)
        const json = await res.json()
        return json
    } catch (error) {

        throw error(404, "Http Not found")
    }
}
