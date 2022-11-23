import { writable } from "svelte/store";

export let isInProduct = writable(false);
export let isInCategory = writable(false)