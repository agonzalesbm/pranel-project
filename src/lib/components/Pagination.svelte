<script>
    import "bootswatch/dist/lux/bootstrap.min.css";
    import { element } from "svelte/internal";
    import { isInProduct } from "../services/store";

    export let size = 0;
    export let category = "";
    export let index = 1;

    let total = ~~(size / 12);
    $: total;
    total = size % 12 > 0 ? total + 1 : total;

    console.log(total);

    let array = new Array(total);

    let isHere = false;
    isInProduct.subscribe((value) => (isHere = value));

</script>

<nav class="container {isHere ? 'visually-hidden' : ''} ​​">
    <ul class="pagination justify-content-center">
        {#each array as element, i}
        
            <li class="page-item" class:active={i===index-1}>
                <a
                    class="page-link" 
                    data-sveltekit-reload
                    href={`${category}?i=${i + 1}`}>{i + 1}</a
                >
            </li>
        {/each}
    </ul>
</nav>
