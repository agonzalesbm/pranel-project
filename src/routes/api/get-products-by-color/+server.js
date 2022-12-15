// @ts-nocheck
import { async } from "@firebase/util";
import { error, json } from "@sveltejs/kit";
import { filesByColorLoader } from "$lib/services/firestore";

/** @type {import('./$types').RequestHandler} */

export const GET = async ({ url }) => {
  let color = url.searchParams.get("c");
  let product = url.searchParams.get("p");
  const result = await filesByColorLoader(product, color);
  return json(result);
};
