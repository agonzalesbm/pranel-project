<script>
  // @ts-nocheck
  import Pagination from "$lib/components/Pagination.svelte";
  import Category from "$lib/components/Category.svelte";
  import HeaderCategory from "$lib/components/HeaderCategory.svelte";
  import iconShoes from "$lib/img/icons/tacones-altos.svg";
  import {
    currentProducts,
    existColor,
    isSortByAscending,
    isSortByDescending,
  } from "$lib/services/store";
  import Message from "$lib/components/Message.svelte";
  import { clickShoesButton } from "$lib/services/clickStates";

  export let data;
  const { result, size, index, color } = data;

  $currentProducts = result;

  let arrays = [];
  let array = [];
  let isChangeAscending = false;
  let isChangeDescending = false;

  existColor.update((value) => (value = color !== undefined ? color : "default"));

  isSortByAscending.update((value) => (value = false));
  isSortByDescending.update((value) => (value = false));

  isSortByAscending.subscribe((value) => (isChangeAscending = value));
  isSortByDescending.subscribe((value) => (isChangeDescending = value));
  const fillFields = () => {
    arrays = [];
    array = [];
    for (let i = 0; i < result.length; i++) {
      if (i !== 0 && i % 4 === 0) {
        arrays.push(array);
        array = [];
        array.push($currentProducts[i]);
      } else {
        if (result[i]) {
          array.push($currentProducts[i]);
        }
      }
    }
    if (array) {
      arrays.push(array);
    }
  };
  fillFields();
  clickShoesButton();
</script>

<head>
  <link rel="stylesheet" href="src/lib/styles/bg_categories.css" />
</head>

<div class="body">
  <HeaderCategory category="Shoes" pathIcon={iconShoes} />
  <p class="visually-hidden">
    {#if isChangeAscending}
      {fillFields()}
    {:else if isChangeDescending}
      {fillFields()}
    {/if}
  </p>
  <div class="bg-img">
    <div class="catalogue">
      {#each arrays as array}
        <Category {array} />
      {/each}
      {#if arrays[0][0] !== undefined}
        <Pagination
          {size}
          {index}
          category={arrays[0][0].category}
          color={color === undefined ? "" : color} />
      {:else}
        <Message
          text={color !== undefined ? "with this filter" : "on this page that are off limits"}
          path="/shoes" />
      {/if}
    </div>
  </div>
</div>

<style>
  .bg-img {
    background-image: url("/src/lib/img/cover/shoes-header.jpg");
    background-position: bottom;
  }
</style>
