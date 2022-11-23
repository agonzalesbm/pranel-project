// @ts-nocheck
import { error, json } from '@sveltejs/kit';
import { fileLoader } from '../../../services/firestore';

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ url }) => {
    const product = url.searchParams.get('p')
    const id = url.searchParams.get('id')
    const result = await fileLoader(product, id) 
    return json(result)
}