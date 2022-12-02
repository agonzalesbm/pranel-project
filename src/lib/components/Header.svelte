<script>
    // @ts-nocheck

    import "animate.css";
    import logo from "../img/LogoPranel.svg";
    import {
        isAnError,
        isInCart,
        isInCategory,
        isVisibleCart,
        productsCart,
        totalPriceCart,
    } from "../services/store";
    import Product from "./Product.svelte";
    import WindowsCart from "./WindowsCart.svelte";

    let cart = false;
    isInCart.subscribe((value) => (cart = value));

    let isHidden = false;
    isInCategory.subscribe((value) => {
        isHidden = value;
    });

    const onClick = () => {
        isVisibleCart.update((value) => (value = !value));
    };

    let products = [];
    let cartProducts = [];
    let total = 0;

    $: products;
    $: total;
    $: cartProducts;

    if (browser) {
        let cartStorage = window.localStorage.getItem("cart");
        cartProducts = JSON.parse(cartStorage);
        let total = 0;
        cartProducts.forEach((e) => (total += e.price * e.quantity));
        console.log(total);
        totalPriceCart.set(total);
        productsCart.set(cartProducts)
    }
    totalPriceCart.subscribe((value) => (total = value));
    productsCart.subscribe(value => products = value)

    import { clickBags, clickShoes, clickJewelry } from "$lib/services/store";
    import { browser } from "$app/environment";

    function clickBagsButton() {
        clickBags.update((value) => (value = true));
        clickShoes.update((value) => (value = false));
        clickJewelry.update((value) => (value = false));
    }

    function clickJewelryButton() {
        clickBags.update((value) => (value = false));
        clickShoes.update((value) => (value = false));
        clickJewelry.update((value) => (value = true));
    }

    function clickShoesButton() {
        clickBags.update((value) => (value = false));
        clickShoes.update((value) => (value = true));
        clickJewelry.update((value) => (value = false));
    }
</script>

<header class:visually-hidden={$isAnError}>
    <div class="wrapper">
        <div class="logoHeader">
            <a href="/"><img src={logo} width="300" height="90" /></a>
        </div>

        <nav>
            <a href="#"
                ><span style="color: black">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-search"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                        />
                    </svg></span
                >
            </a>
            <span class="icon-cart">
                <a
                    on:click={onClick}
                    class={cart ? "visually-hidden" : ""}
                    href="/cart"
                >
                    <span style="color: black">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-cart-fill"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                            />
                        </svg>
                    </span>
                </a>
                <div class={cart ? "container visually-hidden" : "container"}>
                    <div class="title">
                        <h5>List of products</h5>
                    </div>
                    <div class="popover-body">
                        {#if total !== 0}
                            {#each products as product (product.id)}
                                <WindowsCart
                                    name={product.name}
                                    price={product.price}
                                    image={product.image}
                                    category={product.category}
                                    id={product.id}
                                    quantity={product.quantity}
                                />
                            {/each}
                            <div class="gradient " />
                        {:else}
                            <div class="popover-empty ">
                                <h5 class="empty-message">Cart is empty</h5>
                                <a href="/" class="btn-pop">Go to Home</a>
                            </div>
                        {/if}
                    </div>
                    <div class={total !== 0 ? "" : "visually-hidden"}>
                        <div class="popover-footer">
                            <h5>Total:</h5>
                            <h5 style="right: 1em;position:absolute;">
                                <!-- {$totalPriceCart.toFixed(2)} $ -->
                                {total.toFixed(2)} $
                            </h5>
                        </div>
                        <div class="btn-view">
                            <b
                                ><a class="link-popover" href="/cart"
                                    >View all products</a
                                ></b
                            >
                        </div>
                    </div>
                </div>
            </span>

            <a href="#"
                ><span style="color: black"
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-person-fill"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                        />
                    </svg></span
                >
            </a>
            <a href="#" class:visually-hidden={isHidden}
                ><span style="color: black"
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-list"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                        />
                    </svg></span
                >
                <ul class="menu">
                    <li>
                        <a href="/shoes" on:click={clickShoesButton}>Shoes</a>
                    </li>
                    <li><a href="/bags" on:click={clickBagsButton}>Bags</a></li>
                    <li>
                        <a href="/jewelry" on:click={clickJewelryButton}
                            >Jewelry</a
                        >
                    </li>
                </ul>
            </a>
        </nav>
    </div>
</header>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    header {
        width: 100%;
        overflow: hidden;
        background: #ffded7;
        margin-bottom: 10px;
    }

    .icon-cart:hover .container {
        visibility: visible;
        opacity: 1;
        transition: 0.3s;
    }

    .container {
        visibility: hidden;
        background-color: white;
        padding: 15px;
        position: absolute;
        margin-left: -18em;
        margin-top: -20px;
        height: auto;
        max-width: 25em;
        min-width: 25em;
        border-style: solid;
        border-color: black;
        z-index: 10;
        min-height: 3em;
        max-height: calc(100vh - 30vh);
        transition: 0.3s;
        opacity: 0;
        border-radius: 4px;
    }

    .container::before {
        content: "";
        border-style: solid;
        border-width: 0px 12px 12px 12px;
        border-color: transparent transparent black transparent;
        position: absolute;
        top: -12px;
        right: 8px;
    }

    .popover-body {
        overflow-y: auto;
        max-height: calc(100vh - 50vh);
        min-height: 0.5em;
        position: relative;
        box-shadow: inset;

        scrollbar-width: thin;
        scrollbar-color: #ffd7d7 rgb(255, 255, 255);
    }

    /* Works on Chrome, Edge, and Safari */
    .popover-body::-webkit-scrollbar {
        width: 12px;
        border-radius: 20px;
    }
    .popover-body::-webkit-scrollbar-track {
        background: rgb(255, 255, 255);
    }

    .popover-body::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.807);
        border-radius: 20px;
        border: 3px solid rgb(255, 255, 255);
    }

    .empty-message {
        color: #777777;
        margin: 0.5em;
        padding-top: 1em;
    }

    .title {
        border-color: transparent transparent black transparent;
        border-style: solid;
        padding-bottom: 0.2em;
    }

    .title,
    .popover-body {
        text-align: center;
    }

    .popover-footer {
        display: inline;
        display: flex;
        border: black solid 0.3em;
        padding-top: 0.5em;
        border-color: black transparent transparent transparent;
        border-radius: 0.35em;
    }

    .btn-pop {
        width: 80%;
        height: 2em;
        background-color: black;
        color: azure;
        padding: 0.4em;
        margin-left: -0.5em;
        font-size: 1.5em;
        transform: scale(0.7);
    }

    .btn-pop:hover {
        color: black;
        border: rgba(0, 0, 0) solid 0.2em;
        border-radius: 0;
        padding: 0.2em;
    }

    .popover-empty {
        height: 7em;
        text-align: center;
        display: block;
        position: relative;
        overflow: hidden;
    }

    .link-popover {
        width: 100%;
        font-size: 1em;
        position: relative;
        padding: 0.5em;
        margin: 0;
        background-color: #ffded7;
        transform: translateY(-50%);
        text-transform: uppercase;
        border-radius: 3px;
        box-shadow: 0 0 2px rgb(51, 51, 51);
    }

    .link-popover:hover {
        border-radius: 3px;
    }

    .btn-view {
        position: relative;
        width: 100%;
        height: 2.5em;
        text-align: center;
    }

    .gradient {
        bottom: 0%;
        left: 0%;
        position: fixed;
        width: 98.5%;
        background: linear-gradient(
            to top,
            #0000004c,
            rgba(251, 238, 238, 0.133)
        );
        z-index: 1;
        height: 5%;
        margin-left: 0.2em;
    }

    .wrapper {
        width: 100%;
        max-width: 1500px;
        margin: auto;
        overflow: hidden;
        max-height: 90px;
    }

    header .logoHeader {
        color: white;
        font-size: 50px;
        line-height: 0px;
        float: left;
    }

    header nav {
        float: right;
        line-height: 85px;
    }

    header nav a {
        display: inline-block;
        color: black;
        text-decoration: none;
        padding: 10px 20px;
        line-height: normal;
        font-size: 30px;
        font-weight: bold;
    }

    header nav a:hover {
        background: white;
        border-radius: 30px;
    }

    .wrapper a ul {
        display: none;
        z-index: 1000;
        -moz-box-shadow: 0.7px 1px 1px #777777;
        -webkit-box-shadow: 0.7px 1px 1px #777777;
        box-shadow: 0.7px 1px 1px #777777;
    }

    .wrapper a ul li {
        background-color: #ffded7;
        color: #ffff;
        display: block;
    }

    .wrapper a:hover > ul {
        display: block;
        right: 1%;
        position: absolute;
        border-radius: 0px;
    }

    .menu li :hover {
        background: white;
        color: black;
        border-radius: 0%;
        width: 100%;
    }
</style>
