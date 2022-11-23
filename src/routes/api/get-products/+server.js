// @ts-nocheck
import { async } from '@firebase/util';
import { error, json } from '@sveltejs/kit';
import { filesLoader } from "$lib/services/firestore";

/** @type {import('./$types').RequestHandler} */

export const GET = async ({ url }) => {
    let product = url.searchParams.get("p")
    let index = url.searchParams.get("i") === null ? 1 : parseInt(url.searchParams.get("i"))
    let start = (index - 1) * 12 + 1
    let end = (start + 12) - 1
    const result = await filesLoader(product, start, end)
    return json({result})
}
