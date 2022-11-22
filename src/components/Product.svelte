<script>
    import "bootstrap-icons/font/bootstrap-icons.css";
    import ProductImage from "./ProductImage.svelte";

    export let handBag = "";
    export let handBagPerson = "";
    export let title = "default";
    export let price = "";
</script>

<div class="category_container card m-3">
    <a href="#">
        <ProductImage {handBag} {handBagPerson} />
    </a>
    <p class="card-text"><span class="text-align-center">{price} $</span></p>
    <button class="btn btn-outline-primary btn-sm justify-content-center"
        ><h4>
            <i
                class="bi bi-cart-plus align-items-center justify-content-center"
            />
        </h4></button
    >
</div>

<style>
    /* .btn {
        background-color: #ffded7;
        max-width: 40px;
        margin-left: 39%;
        border-radius: 20%;
    } */
</style>
