import { getTotalProducts } from "./firestore"

export const getProducts = async (/** @type {string} */ pathname, /** @type {number} */ index = 1) => {
    if (pathname === 'jewelry') {
        pathname = 'rings'
    }
    const obj = await fetch(`http://localhost:5173/api/get-products?p=${pathname}&i=${index}`)
    const json = await obj.json()
    return json
}

export const getProductsByColor = async (/** @type {string} */ pathname, /** @type {string} */ color, /** @type {number} */ index) => {
    if (pathname === 'jewelry') {
        pathname = 'rings'
    }
    const obj = await fetch(`http://localhost:5173/api/get-products-by-color?p=${pathname}&c=${color}&i=${index}`)
    const json =  await obj.json()
    return json
}

export const getSize = async (/** @type {string} */ path) => {
    if (path === 'jewelry') {
        path = 'rings'
    }

    const size = await getTotalProducts(path)
    return size
}