<script>
    // @ts-nocheck
    import Pagination from "$lib/components/Pagination.svelte";
    import Category from "$lib/components/Category.svelte";
    import HeaderCategory from "$lib/components/HeaderCategory.svelte";
    import {
        currentProducts,
        isSortByAscending,
        isSortByDescending,
    } from "$lib/services/store";

    export let data;
    const { result, size, index } = data;

    $currentProducts = result;

    let arrays = [];
    let array = [];
    let isChangeAscending = false;
    let isChangeDescending = false;

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
</script>

<HeaderCategory
    category="Shoes"
    pathImage="/src/lib/img/cover/shoes-head.jpg"
/>
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
        <Pagination {size} {index} category={result.category} />
    </div>
</div>

<style>
    .catalogue {
        background-color: white;
        width: fit-content;
        box-shadow: 0 0 1em black;
    }
    .bg-img {
        display: flex;
        justify-content: center;
        background-image: linear-gradient(rgba(219, 219, 219, 0.763), rgba(0, 0, 0, 0.278)),  url("/src/lib/img/cover/shoes-head.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
