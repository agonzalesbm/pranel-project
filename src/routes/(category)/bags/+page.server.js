// @ts-nocheck
import { error } from '@sveltejs/kit';
import { currentPage } from "$lib/services/store";

/** @type {import('../../../../.svelte-kit/types/src/routes/(category)/bags/$types').PageLoad} */
export const load = async ({ url }) => {
    let index = 1
    const { pathname, searchParams } = url
    currentPage.update(value => value = pathname)
    console.log(pathname)
    index = searchParams.get('i') === null ? 1 : parseInt(searchParams.get('i'))
    const obj = await fetch(`http://localhost:5173/api/get-products?p=bags&i=${index}`)
    const json = await obj.json()
    return json
}