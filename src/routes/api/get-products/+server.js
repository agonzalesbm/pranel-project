// @ts-nocheck
import { error, json } from '@sveltejs/kit';
import { loadBags } from "../../../services/firestore";

/** @type {import('./$types').RequestHandler} */

export function GET({ url }) {
    console.log(url)
    return json({data:"hola"})
}
