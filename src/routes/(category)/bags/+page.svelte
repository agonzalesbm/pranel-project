<script>
    // @ts-nocheck
    import Category from "$lib/components/Category.svelte";
    import HeaderCategory from "$lib/components/HeaderCategory.svelte";
    import {
        currentProducts,
    } from "$lib/services/store";

    export let data;
    const { result } = data;
    $currentProducts = result;

    let arrays = [];
    let array = [];
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
</script>

<HeaderCategory category="Bags" pathImage="/src/lib/img/cover/bag-head.png" />

<Category array={arrays[0]} />
<Category array={arrays[1]} />
<Category array={arrays[2]} />
