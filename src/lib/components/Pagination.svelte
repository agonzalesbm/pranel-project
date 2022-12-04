<script>
    // @ts-nocheck

    import { browser } from "$app/environment";

    import "bootswatch/dist/lux/bootstrap.min.css";
    import { isInProduct } from "../services/store";

    export let size = 0;
    export let category = "";
    export let index = 1;

    let total = ~~(size / 12);
    $: total;
    total = size % 12 > 0 ? total + 1 : total;

    let array = new Array(total);

    let isHere = false;
    isInProduct.subscribe((value) => (isHere = value));

    const changeState = () => {
        if (browser) {
            let positions = {
                bags: false,
                shoes: false,
                jewelry: false,
            };
            if (category === "bags") positions = { ...positions, bags: true };
            else if (category === "shoes")
                positions = { ...positions, shoes: true };
            else if (category === "jewelry")
                positions = { ...positions, jewelry: true };
            window.localStorage.setItem("current", JSON.stringify(positions));
        }
    };
</script>

<nav class="container {isHere ? 'visually-hidden' : ''} ​​">
    <ul class="pagination justify-content-center">
        {#each array as element, i}
            <li class="page-item" class:active={i === index - 1}>
                <a
                    class="page-link"
                    data-sveltekit-reload
                    on:click={changeState}
                    href={`${category}?i=${i + 1}`}>{i + 1}</a
                >
            </li>
        {/each}
    </ul>
</nav>
