// @ts-nocheck
import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
    console.log(url);
    
}
