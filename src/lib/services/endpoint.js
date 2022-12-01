// @ts-nocheck

import { error, json } from '@sveltejs/kit';
const MESSAGE_404 = 'Page not found'

export const getProducts = async (/** @type {string} */ table, /** @type {string} */ id) => {
    if (table === 'jewelry') {
        table = 'rings'
    }
    const res = await fetch(`http://localhost:5173/api/get-product?p=${table}&id=${id}`)
    const json = await res.json()

    if (json.message && json.message === MESSAGE_404) {
        throw error(404, MESSAGE_404)
    }
    return { ...json }
}

export const getSuggestions = async (/** @type {string} */ table, /** @type {string} */ id) => {
    if (table === 'jewelry') {
        table = 'rings'
    }
    const res = await fetch(`http://localhost:5173/api/get-product?p=${table}&id=${id}`)
    const json = await res.json()
    const suggestedProducts = await fetch(`http://localhost:5173/api/get-products-by-color?p=${table}&c=${json.color}`)
    let jsonSuggestedProducts = await suggestedProducts.json()
    jsonSuggestedProducts = jsonSuggestedProducts.filter(element => element.id !== id)

    if (jsonSuggestedProducts.length < 4) {
        const productsByPrice = await fetch(`http://localhost:5173/api/get-products-by-price?p=${table}&price=${json.price}`)
        let jsonByPrice = await productsByPrice.json()
        jsonByPrice = jsonByPrice.filter(element => element.id !== id)
        return [...jsonSuggestedProducts, ...jsonByPrice]
    }
    return [...jsonSuggestedProducts]
}