// @ts-nocheck
import { getProducts, getProductsByColor, getSize } from '$lib/services/endpointCategory';
import { error } from '@sveltejs/kit';
import { clickBags, clickJewelry, clickShoes, currentPage } from "$lib/services/store";

const updateTheClick = (path) => {
    clickShoes.update(value => value = false)
    clickBags.update(value => value = false)
    clickJewelry.update(value => value = false)
    if (path === 'shoes') {
        clickShoes.update(value => value = true)
    } else if (path === 'bags') {
        clickBags.update(value => value = true)
    } else if (path === 'jewelry') {
        clickJewelry.update(value => value = true)
    }
}

/** @type {import('../../../../.svelte-kit/types/src/routes/(category)/bags/$types').PageLoad} */
export const load = async ({ url }) => {
    let index = 1
    const { pathname, searchParams } = url
    currentPage.update(value => value = pathname)
    index = searchParams.get('i') === null ? 1 : parseInt(searchParams.get('i'))
    let color = searchParams.get('color') === null ? '' : searchParams.get('color')
    const [, path] = pathname.split('/')
    updateTheClick(path)
    if (color !== '') {
        const json = await getProductsByColor(path, color)
        return { result: json, size: json.length, index, color }
    }
    const json = await getProducts(path, index)
    const size = await getSize(path)
    return { result: json.result, size, index }
}