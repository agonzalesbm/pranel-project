<script>
    // @ts-nocheck
    import Pagination from "$lib/components/Pagination.svelte";
    import Category from "$lib/components/Category.svelte";
    import HeaderCategory from "$lib/components/HeaderCategory.svelte";

    export let data;
    const { result, size, index } = data;

    let arrays = [];
    let array = [];
    for (let i = 0; i < result.length; i++) {
        if (i !== 0 && i % 4 === 0) {
            arrays.push(array);
            array = [];
            array.push(result[i]);
        } else {
            if (result[i]) {
                array.push(result[i]);
            }
        }
    }
    if (array) {
        arrays.push(array);
    }
</script>

<HeaderCategory
    category="Rings"
    pathImage="/src/lib/img/cover/jewelry-head.jpg"
/>

<Category array={arrays[0]} />
<Category array={arrays[1]} />
<Category array={arrays[2]} />

<Pagination {size} {index}category={result.category} />
