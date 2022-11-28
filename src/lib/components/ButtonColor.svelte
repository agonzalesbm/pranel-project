<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let color = "#000";

    const click = () => {
        dispatch("changeColor", color);
    };
</script>

<button
    on:click|preventDefault={click}
    class="m-1"
    style="background-color: {color}; color: {color};"
>
    bs
</button>

<style>
    button {
        border-radius: 20%;
    }
</style>
