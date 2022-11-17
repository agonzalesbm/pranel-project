<script>
    import ProductImage from "./ProductImage.svelte";

    export let handBag = "";
    export let handBagPerson = "";
    export let title = "default";
    export let price = "";
</script>

<div class="category_container card m-3">
    <a href="#">
        <ProductImage {handBag} {handBagPerson}/>
    </a>
    <span>{price}</span>
    <button class="btn">+</button>
</div>

<style>
    .btn {
        background-color: #ffded7;
        max-width: 40px;
        margin-left: 45%;
        border-radius: 40%;
    }
</style>
