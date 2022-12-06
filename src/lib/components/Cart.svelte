<script>
    // @ts-nocheck

    /*import "bootstrap";*/
    import "bootswatch/dist/lux/bootstrap.min.css";
    import { deleteElement, isInCart } from "../services/store";
    import { onDestroy, tick } from "svelte";
    import ProductCart from "./ProductCart.svelte";
    import TotalPrice from "./TotalPrice.svelte";
    import { productsCart, totalPriceCart } from "../services/store";
    import Noty from "noty";
    import "noty/lib/themes/nest.css";
    import "noty/lib/noty.css";
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";
    import { showNoty } from "$lib/services/noty";

    isInCart.update((value) => (value = true));

    let pathCart = "src/img/cart/";

    let products = [];
    let cartProducts = [];
    let total = 0;
    let deleteId = "";

    $: total;
    $: products;
    $: cartProducts;
    $: console.log("cart", total);

    if (browser) {
        let cartStorage = window.localStorage.getItem("cart");
        cartProducts = JSON.parse(cartStorage);
        let total = 0;
        cartProducts.forEach((e) => (total += e.price * e.quantity));
        totalPriceCart.set(total);
        productsCart.set(cartProducts);
    }

    $: console.log(products);

    totalPriceCart.subscribe((value) => (total = value));
    productsCart.subscribe((value) => (products = value));
    deleteElement.subscribe((value) => (deleteId = value));

    $: deleteId !== "" ? deleteProductCart() : "";
    const deleteProductCart = () => {
        cartProducts = products.filter((e) => e.id !== deleteId);
        if (browser) {
            window.localStorage.setItem("cart", JSON.stringify(cartProducts));
            let cartStorage = window.localStorage.getItem("cart");
            cartProducts = JSON.parse(cartStorage);
            total = 0;
            cartProducts.forEach((e) => (total += e.price * e.quantity));
            totalPriceCart.set(total);
            productsCart.set(cartProducts);
            deleteElement.update((value) => (value = ""));
            showNoty("Product removed to cart", "error");
        }
    };

    const goTo = () => {
        goto("/");
    };

    onDestroy(() => {
        isInCart.update((value) => (value = false));
    });
</script>

<div class="title_ml-5_text-left">
    <p>My Cart</p>
</div>

<div class="body-cart">
    {#if cartProducts.length === 0}
        <div class="container ml-5 text-center">
            <div class="row justify-content-center">
                <div class="emptyCart">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <img
                        src="src\lib\img\cart\cartEmpty.png"
                        width="300"
                        height="300"
                    />
                </div>
                <p class="label">YOUR SHOPPING CART IS EMPTY</p>
                <button on:click={goTo} class="btn justify-content-center"
                    >CONTINUE SHOPPING</button
                >
            </div>
        </div>
    {:else}
        <div class="Principal">
            <div class="row">
                <div class="col-9">
                    <div class="row">
                        <div class="col" />
                        <div class="col" />
                        <div
                            class="col"
                            style="margin-left: 10vh; max-width:28vh"
                        />
                        <div class="col" />
                        <div style="width: 20vh;" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-9">
                {#each products as { image, name, description, price, stock, id, category, quantity } (id)}
                    <ProductCart
                        {image}
                        productName={name}
                        productDescription={description}
                        {price}
                        {stock}
                        {total}
                        {id}
                        {category}
                        {quantity}
                    />
                {/each}
            </div>
            <div class=" col total">
                <TotalPrice totalPrice={$totalPriceCart.toFixed(2)} $ />
            </div>
        </div>
    {/if}
</div>

<style>
    @import url(//db.onlinewebfonts.com/c/2a565fc8eb19fe770464e0d4ee172b96?family=Bree+Serif);
    .title_ml-5_text-left {
        margin-left: 90px;
        font-size: 40px;
        font-family: "Bree Serif";
    }
    .body-cart {
        min-height: 50vh;
    }

    .label {
        margin-top: 5%;
        font-size: 00%;
        font-family: "Bree Serif";
        color: #545454;
    }

    .btn {
        margin-top: 2%;
        margin-bottom: 10%;
        background-color: #fff4f2;
        width: 20%;
        height: 60%;
        font-family: "Bree Serif";
        font-size: 135%;
        border-bottom: 3px solid #000000;
        border-right: 3px solid #000000;
        border-radius: 7px;
    }

    .Principal {
        font-size: 250%;
        font-weight: bold;
        margin-left: 1%;
    }

    .Principal div {
        background-color: #fff;
    }

    @media (max-width: 958px) {
        .total {
            transform: scale(1);
        }
    }
</style>
