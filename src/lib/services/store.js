import {writable} from 'svelte/store'

export let isInCart = writable(false)
export let isInProduct = writable(false);
export let isInCategory = writable(false)
export let isAnError = writable(false)
export let isVisibleCart = writable(false)
