<script>
// @ts-nocheck

    /**
     * TODO: create bug report to suggested products when there is no suggestions
     * TODO: add creation the cart in localstorage if there is no when the app runs
     * * important: Solved
     */
    import "bootswatch/dist/lux/bootstrap.min.css";
    import "animate.css";
    import { productsCart, totalPriceCart } from "../services/store";
    import { goto } from "$app/navigation";
    import Noty from "noty";
    import "noty/lib/themes/nest.css";
    import "noty/lib/noty.css";
    import SuggestedProduct from "./SuggestedProduct.svelte";
    import { browser } from "$app/environment";
    import { showNoty } from "$lib/services/noty";

    export let data;
    export let arrayInfo = [];

    const { product, suggested } = data;
    const {
        image,
        imagep,
        id,
        name,
        size,
        price,
        stock,
        description,
        category,
    } = product;
    const [first, second, third, forth] = suggested;

    let changeState = false;
    if (browser) {
        let cartStorage = window.localStorage.getItem("cart");
        let cart = JSON.parse(cartStorage);
        changeState = cart.find((product) => product.id === id);
    }
    let imgSourc = image;
    export let secondImg = imagep;
    export let firstImg = image;

    $: imgSourc;
    $: changeState;

    $: imgSourc;

    const chnageOverHoverFirstImg = () => {
        imgSourc = firstImg;

        document.getElementById('first-image').classList.add('active');
        document.getElementById('second-image').classList.remove('active');
    };
    const chnageOverHoverSecondImg = () => {
        imgSourc = secondImg;

        document.getElementById('second-image').classList.add('active');
        document.getElementById('first-image').classList.remove('active');
    };

    
    const addProductInCart = () => {
        if (!browser) return;
        let cartStorage = window.localStorage.getItem("cart");
        let cart = JSON.parse(cartStorage);
        let exist = cart.find((product) => product.id === id);
        if (!exist) {
            cart = [
                ...cart,
                {
                    id,
                    image,
                    imagePerson: imagep,
                    name,
                    price,
                    stock,
                    description,
                    category,
                    quantity: 1,
                },
            ];
            window.localStorage.setItem("cart", JSON.stringify(cart));
            let total = 0;
            cart.forEach((e) => (total += e.price * e.quantity));
            totalPriceCart.set(total);
            productsCart.set(cart);
            changeState = true;
            showNoty("Product added to cart", "alert");
        } else {
            changeState = false;
        }
    };

    const goTo = () => {
        goto("/cart");
    };
</script>

<div class="main-wrapper animate__animated animate__fadeIn">
    <div class="container">
        <div class="product-div">
            <div class="product-div-left">
                <div class="hover-container">
                    <div id="first-image" class="active">
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                        <img
                            src={firstImg}
                            on:mouseover={chnageOverHoverFirstImg}
                        />
                    </div>
                    <div id="second-image">
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                        <img
                            src={secondImg}
                            on:mouseover={chnageOverHoverSecondImg}
                        />
                    </div>
                </div>
                <div class="img-container">
                    <img src={imgSourc} id="actImg" />
                </div>
            </div>
            <div class="product-div-right">
                <span class="product-name">{name}</span>
                <span class="product-refrence">Product Reference : {id}</span>
                <span class="product-size">Size/Dimmensions : {size}</span>
                <span class="Stock">Stock:{stock}[Units]</span> <br>
                <span class="aboutProduct">About The Product</span>

                <div class="Description">
                    {description}
                </div>

                <div class="LiDescription">
                    {#each arrayInfo as element}
                        <li class="listDesc">
                            {element}
                        </li>
                    {/each}
                </div><br>
                
                <span class="product-price">Price: {price}$</span>
                <div class="btn-groups">
                    {#if changeState}
                        <button
                            on:click={goTo}
                            type="button"
                            class="add-cart-btn"
                        >
                            <i class="fas fa-shopping-cart" />Go cart</button
                        >
                    {:else}
                        <button
                            on:click={addProductInCart}
                            type="button"
                            class="add-cart-btn"
                        >
                            <i class="fas fa-shopping-cart" />add to cart</button
                        >
                    {/if}
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container">
    {#if suggested.length >= 4}
        <SuggestedProduct array={[first, second, third, forth]} />
    {/if}
</div>

<style>
    * {
        padding: 0;
        margin: 0;
        color: black;
    }

    html,
    body {
        font-family: "Roboto", sans-serif;
    }

    img {
        width: 100%;
        display: block;
    }

    .listDesc {
        font-family: "Roboto", sans-serif;
    }
    .main-wrapper {
        min-height: 60vh;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .container {
        max-width: 1200px;
        padding: 0 1rem;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .product-div {
        margin: 1rem 0;
        padding: 2rem 1em;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        background-color: #fff;
        border-radius: 3px;
        column-gap: 10px;
        --bg-product: #ffded7cd;
    }

    .product-div-left {
        min-width: 30%;
        display: flex;
    }
    .product-div-right {
        padding: 1em 2em;
        background-color: var(--bg-product);
        margin: 10px;
        border-radius: 5px;
        min-width: 60%;
    }

    .product-div:hover {
        --bg-product: #ffded7;
        box-shadow: 0 0 1em gray;
    }
    .img-container img {
        height: 41em;
        padding: 0.5em;
        margin: 0 auto;
        border-radius: 5px;
    }
    .hover-container {
        display: block;
        margin-right: 1em;
        align-items: center;
        justify-content: start;
        margin-top: 0.1em;
    }
    .hover-container div {
        border: 2px solid rgba(126, 126, 126, 0.416);
        padding: 1rem;
        border-radius: 3px;
        margin: 0 4px 8px 4px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .active {
        border-color: #000000 !important;
    }

    .hover-container div:hover {
        border-color: rgba(0, 0, 0, 0.681);
    }
    .hover-container div img {
        width: 60px;
        cursor: pointer;
    }
    .product-div-right span {
        display: block;
    }
    .product-name {
        font-size: 2em;
        margin-bottom: 22px;
        font-weight: 700;
        letter-spacing: 1px;
        opacity: 0.9;
        min-height: 2em;
    }

    .aboutProduct {
        font-size: 23px;
        margin-bottom: 10px;
        font-weight: 700;
        letter-spacing: 1px;
        opacity: 1;
    }
    .product-price {
        font-weight: 700;
        font-size: 1.8em;
        opacity: 1;
        font-weight: 900;
    }

    .btn-groups {
        margin: 1em;
        display: flex;
        justify-content: center;
    }
    .btn-groups button {
        display: inline-block;
        font-size: 1em;
        font-family: inherit;
        text-transform: uppercase;
        padding: 0.6em;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    .btn-groups button .fas {
        margin-right: 8px;
    }
    .add-cart-btn {
        border-radius: 15px;
        background: #ffded7;
        padding: 20px;
        width: 200px;
        height: 50px;
    }
    .add-cart-btn:hover {
        background-color: #fff;
        color: black;
    }

    @media screen and (max-width: 992px) {
        .product-div {
            grid-template-columns: 100%;
        }
        .product-div-right {
            text-align: left;
            padding: 2em 3em;
        }

        .product-name {
            text-align: center;
        }
    }

    @media screen and (max-width: 400px) {
        .btn-groups button {
            width: 100%;
            margin-bottom: 10px;
        }

        .img-container img {
            width: 20vh;
        }
    }
</style>
