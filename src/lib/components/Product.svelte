<script>
    // @ts-nocheck

    import "bootstrap-icons/font/bootstrap-icons.css";
    import ProductImage from "./ProductImage.svelte";
    import { productsCart, totalPriceCart } from "../services/store";
    import { tick } from "svelte";
    import { goto } from "$app/navigation";
    import Noty from "noty";
    import "noty/lib/themes/nest.css";
    import "noty/lib/noty.css";
    import { browser } from "$app/environment";
    import { showNoty } from "$lib/services/noty";

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
    let changeState = false;
    if (browser) {
        let cartStorage = window.localStorage.getItem("cart");
        let cart = JSON.parse(cartStorage);
        changeState = cart.find((product) => product.id === productId);
    }
    $: changeState;

    const addProductInCart = () => {
        if (!browser) return;
        let cartStorage = window.localStorage.getItem("cart");
        let cart = JSON.parse(cartStorage);
        let exist = cart.find((product) => product.id === productId);
        if (!exist) {
            cart = [
                ...cart,
                {
                    id: productId,
                    image: handBag,
                    imagePerson: handBagPerson,
                    name: title,
                    price,
                    stock,
                    description,
                    category,
                    quantity: 1,
                },
            ];
            window.localStorage.setItem("cart", JSON.stringify(cart));
            let total = 0
            cart.forEach((e) => (total += e.price * e.quantity));
            totalPriceCart.set(total)
            productsCart.set(cart);

            showNoty("Product added to cart", "alert");
            changeState = true;
        } else {
            changeState = false;
        }
    };

    const goToCart = () => {
        goto("/cart");
    };
</script>

<div class="category_container card m-3">
    <a href={path}>
        <ProductImage {handBag} {handBagPerson} />
    </a>
    <p class="card-text"><span class="text-align-center">{price} $</span></p>
    {#if changeState}
        <button
            on:click={goToCart}
            class="btn btn-outline-primary btn-sm-justify-content-center"
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
