// @ts-nocheck
import { error } from '@sveltejs/kit';
import {fileLoader} from '../../../../services/firestore'

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
    const sliceTexted = url.pathname.split("/");
    const [,table, id] = sliceTexted;
    const res = await fileLoader(table, id)
    return res
}
