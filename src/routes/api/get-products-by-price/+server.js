// @ts-nocheck
import { async } from "@firebase/util";
import { error, json } from "@sveltejs/kit";
import { filesByPriceLoader } from "$lib/services/firestore";

/** @type {import('./$types').RequestHandler} */

export const GET = async ({ url }) => {
  let product = url.searchParams.get("p");
  let price = url.searchParams.get("price");
  let first = parseFloat(price) - 30;
  let end = parseFloat(price) + 30;
  const result = await filesByPriceLoader(product, first, end);
  return json(result);
};
