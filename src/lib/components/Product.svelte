<script>
    import "bootstrap-icons/font/bootstrap-icons.css";
    import ProductImage from "./ProductImage.svelte";
    import { productsCart } from "../services/store";
    import { tick } from "svelte";
    import { goto } from "$app/navigation";

    export let handBag = "";
    export let handBagPerson = "";
    export let title = "default";
    export let price = "";
    export let productId = "";
    export let category = "";
    export let stock = 0;
    export let description = "";

    let redirectCategory = category === "rings" ? "jewelry" : category;
    let path = `/${redirectCategory}/${productId}`;
    let changeState = $productsCart.find((product) => product.id === productId);
    $: changeState;

    const addProductInCart = () => {
        let exist = $productsCart.find((product) => product.id === productId);
        if (!exist) {
            $productsCart = [
                ...$productsCart,
                {
                    id: productId,
                    image: handBag,
                    imagePerson: handBagPerson,
                    name: title,
                    price,
                    stock,
                    description,
                },
            ];
            changeState = true;
        } else {
            changeState = false;
        }
    };

    const goToCart = () => {
        goto('/cart')
    }
</script>

<div class="category_container card m-3">
    <a href={path}>
        <ProductImage {handBag} {handBagPerson} />
    </a>
    <p class="card-text"><span class="text-align-center">{price} $</span></p>
    {#if changeState}
        <button on:click={goToCart} class="btn btn-outline-primary btn-sm-justify-content-center"
            >View in the cart</button
        >
    {:else}
        <button
            on:click={addProductInCart}
            class="btn btn-outline-primary btn-sm justify-content-center"
            ><h4>
                <i
                    class="bi bi-cart-plus align-items-center justify-content-center"
                />
            </h4></button
        >
    {/if}
</div>

<style>
</style>
