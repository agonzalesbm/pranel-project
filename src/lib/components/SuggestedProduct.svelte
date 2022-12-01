<script>
    // @ts-nocheck

    import "bootswatch/dist/lux/bootstrap.min.css";
    import Category from "./Category.svelte";

    export let array = [];
</script>

<div class="suggested">
    <h2 class="p-4 text-align-center">Suggested Product</h2>
    <Category {array} />
</div>

<style>
    .suggested {
        background-color: #ffded7;
    }
</style>
