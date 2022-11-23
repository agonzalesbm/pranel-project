<script>
    // @ts-nocheck
    import Category from "$lib/components/Category.svelte";

    export let data;
    const { result } = data;

    let arrays = [];
    let array = [];
    for (let i = 0; i < 12; i++) {
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
    arrays.push(array)
</script>

<Category array={arrays[0]} />
<Category array={arrays[1]} />
<Category array={arrays[2]} />

