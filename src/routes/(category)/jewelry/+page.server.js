// @ts-nocheck
import { clickJewelryButton } from "$lib/services/clickStates";
import { getProducts, getProductsByColor, getSize } from "$lib/services/endpointCategory";
import { currentPage } from "$lib/services/store";

/** @type {import('../../../../.svelte-kit/types/src/routes/(category)/rings/$types').PageLoad} */
export const load = async ({ url }) => {
  let index = 1;
  const { pathname, searchParams } = url;
  await currentPage.update((value) => (value = pathname));
  index = searchParams.get("i") === null ? 1 : parseInt(searchParams.get("i"));
  let color = searchParams.get("color") === null ? "" : searchParams.get("color");
  clickJewelryButton();
  const [, path] = pathname.split("/");
  if (color !== "") {
    const json = await getProductsByColor(path, color);
    return { result: json, size: json.length, index, color };
  }
  const json = await getProducts(path, index);
  const size = await getSize(path);
  return { result: json.result, size, index };
};
