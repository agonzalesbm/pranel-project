// @ts-nocheck
import { error } from '@sveltejs/kit';

/** @type {import('../../../../.svelte-kit/types/src/routes/(category)/bags/$types').PageLoad} */
export const load = async ({ url }) => {
    let index = 1
    const { pathname, searchParams } = url
    index = searchParams.get('i') === null ? 1 : parseInt(searchParams.get('i'))
    const obj = await fetch(`http://localhost:5173/api/get-products?p=bags&i=${index}`)
    const json = await obj.json()
    console.log(json)
    return json
}