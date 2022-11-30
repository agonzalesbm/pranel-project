// @ts-nocheck
import { currentProducts } from "./store";

let array = []
export const sortedByAscendingOrder = () => {
    currentProducts.subscribe(value => array = value)

    array.sort((a, b) => a.price - b.price)
}

export const sortedByDescendingOrder = () => {
    currentProducts.subscribe(value => array = value)
    
    array.sort((a, b) => b.price - a.price)
}
