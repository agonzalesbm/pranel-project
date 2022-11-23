// @ts-nocheck
import { error } from '@sveltejs/kit';
import {fileLoader} from '../../../../services/firestore'

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
    const sliceTexted = url.pathname.split("/");
    const [,table, id] = sliceTexted;
    console.log(table, id)
    const res = await fetch(`http://localhost:5173/api/get-product?p=${table}&id=${id}`)
    const json = await res.json()
    return json
}
