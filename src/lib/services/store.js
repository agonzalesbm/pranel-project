import {writable} from 'svelte/store'

export let isInCart = writable(false)
export let isInProduct = writable(false);
export let isInCategory = writable(false)
export let isAnError = writable(false)
export let isVisibleCart = writable(false)
export let clickShoes = writable(false);
export let clickBags = writable(false);
export let clickJewelry = writable(false);

export let currentPage = writable('')


export let currentProducts = writable([])
export let isSortByAscending = writable(false)
export let isSortByDescending = writable(false)
