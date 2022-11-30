<script>
    // @ts-nocheck
    import Category from "$lib/components/Category.svelte";
    import HeaderCategory from "$lib/components/HeaderCategory.svelte";
    import {
        currentProducts,
        isSortByAscending,
        isSortByDescending,
    } from "$lib/services/store";

    export let data;
    const { result } = data;

    $currentProducts = result;

    let arrays = [];
    let array = [];
    let isChangeAscending = false;
    let isChangeDescending = false;
    isSortByAscending.subscribe((value) => (isChangeAscending = value));
    isSortByDescending.subscribe((value) => (isChangeDescending = value));
    const fillFields = () => {
        arrays = [];
        array = [];
        for (let i = 0; i < 12; i++) {
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
        arrays.push(array);
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
<Category array={arrays[0]} />
<Category array={arrays[1]} />
<Category array={arrays[2]} />​
