// @ts-nocheck
import { getProducts, getSize } from '$lib/services/endpointCategory';
import { error } from '@sveltejs/kit';

/** @type {import('../../../../.svelte-kit/types/src/routes/(category)/rings/$types').PageLoad} */
export const load = async ({ url }) => {
    let index = 1
    const { pathname, searchParams } = url
    index = searchParams.get('i') === null ? 1 : parseInt(searchParams.get('i'))
    const [, path] = pathname.split('/')
    const json = await getProducts(path, index)
    const size = await getSize(path)
    return { result: json.result, size, index }
}