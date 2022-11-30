// @ts-nocheck
import { currentProducts } from "./store";

export const sortedByAscendingOrder = () => {
    let array = []
    currentProducts.subscribe(value => array = value)
    
    array.sort((a, b) => a.price - b.price)
    currentProducts.update(value => value = array)
}

export const sortedByDescendingOrder = () => {
    let array = []
    currentProducts.subscribe(value => array = value)
    
    array.sort((a, b) => b.price - a.price)
}
