<script>
    // @ts-nocheck

    import { browser } from "$app/environment";

    import "bootswatch/dist/lux/bootstrap.min.css";
    import {
        totalPriceCart,
        deleteElement,
        productsCart,
    } from "../services/store";

    export let image = "";
    export let productName = "";
    export let productDescription = "";
    export let price = 0;
    export let stock = 0;
    export let total = 0;
    export let id = "";
    export let quantity = 1;
    export let category = "";

    let path = category + "/" + id;

    let priceChange = 0.0;

    const changeQuantity = (newValue) => {
        if (browser) {
            let cartStorage = window.localStorage.getItem("cart");
            let cartProducts = JSON.parse(cartStorage);
            const index = cartProducts.findIndex(
                (product) => product.id === id
            );
            cartProducts[index].quantity = newValue;
            window.localStorage.setItem("cart", JSON.stringify(cartProducts));
            cartStorage = window.localStorage.getItem("cart");
            cartProducts = JSON.parse(cartStorage);
            productsCart.update((value) => (value = cartProducts));
        }
    };

    $: priceChange = price * quantity;
    $: quantity;
    const increment = () => {
        const btnIncrement = document.getElementById('increment');
        const btnDecrement = document.getElementById('decrement');

        if (quantity <= stock - 1) {
            quantity += 1;
            changeQuantity(quantity);
            totalPriceCart.update((value) => (value = value + price));
            btnIncrement.disabled = quantity === stock;
            btnDecrement.disabled = quantity == 1;
        }
    };
    const decrease = () => {
        const btnIncrement = document.getElementById('increment');
        const btnDecrement = document.getElementById('decrement');
        if (quantity !== 1) {
            quantity -= 1;
            changeQuantity(quantity);
            totalPriceCart.update((value) => (value = value - price));
            btnIncrement.disabled = quantity === stock;
            btnDecrement.disabled = quantity == 1;
        }
    };

    const deleteTheElement = () => {
        deleteElement.update((value) => (value = id));
    };
</script>

<div class="container row align-items-center">
    <div class="col-2">
        <!-- svelte-ignore a11y-missing-attribute -->
        <a href={path}><img class="image img-thumbnail" src={image} /></a>
    </div>
    <div class="col-md-4 align-items-center">
        <p><a href={path}>{productName}</a></p>
    </div>
    <div class="col-2 price">
        <p>{priceChange.toFixed(2)}</p>
    </div>
    <div class="col Quantity">
        <div>
            <button
                on:click={decrease}
                class="justify-content-center"
                id="decrement" disabled>-</button
            >
        </div>
        <div class="number-box">
            <p>{quantity}</p>
        </div>
        <div>
            <button
                on:click={increment}
                class="justify-content-center"
                id="increment">+</button
            >
        </div>
    </div>
    <div class="Dump">
        <!-- svelte-ignore a11y-missing-attribute -->
        <button
            on:click={deleteTheElement}
            class="justify-content-center"
            type="button"
        >
            <img src="src/lib/img/cart/Dump.png" class="image-dump" /></button
        >
    </div>
</div>

<style>
    a:link {
        text-decoration: none;
    }
    a:visited {
        text-decoration: none;
    }
    .row {
        --background: #fff4f2;
        background-color: var(--background);
        margin-bottom: 1rem;
        border-radius: 5px;
    }

    .row:hover {
        --background: #ffded7cf;
        margin-bottom: 1rem;
        box-shadow: 0 0 4px black;
    }

    .container {
        margin-left: 1%;
        overflow: hidden;
        position: relative;
        padding-right: 0%;
    }

    .container p {
        margin-left: 0.1%;
        font-size: 1em;
    }

    .image {
        height: 7em;
    }

    .Dump button {
        margin: 0.1em;
        margin-left: 6em;
        position: absolute;
        border: solid 0px;
        background-color: var(--background);
        height: 100%;
        width: 3em;
        right: -0.1em;
        top: -0.1em;
    }

    .Dump button:hover {
        background-color: white;
        box-shadow: 0 0 2px black;
    }

    .image-dump {
        width: 26px;
        height: 35px;
    }
    .Quantity {
        max-width: 10em;
        min-width: 5em;
        position: relative;
        display: flex;
        color: white;
        padding: 0.5em;
        min-height: 2em;
    }

    .Quantity button {
        border: solid black 0px;
        background-color: black;
        color: beige;
        font-size: 1.7em;
        width: 1.5em;
        border-radius: 5px;
        margin-right: 0.2em;
        margin-left: 0.2em;
    }

    .number-box {
        color: black;
        background-color: white;
        height: 2.5em;
        border: solid 1px rgba(0, 0, 0, 0.56);
        padding: 0.5em;
        border-radius: 5px;
        text-align: center;
        min-width: 3.3em;
        font-size: 1.1em;
    }

    .price {
        font-size: 1.5em;
        padding: 0em;
        padding-top: 0.4em;
        color: black;
        margin: 0.5em;
    }

    button:disabled {
        background-color: rgba(140, 140, 140, 0.661);
        color: rgba(128, 128, 128, 0.8);
    }

    @media (max-width: 958px) {
        .Dump button {
            width: 2em;
        }
        .image-dump {
            transform: scale(0.7);
        }
    }
</style>
