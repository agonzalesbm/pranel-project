<script>
    // @ts-nocheck

    /*import "bootstrap";*/
    import "bootstrap/dist/css/bootstrap.min.css";
    import { isInCart } from "../services/store";
    import { onDestroy } from "svelte";
    import ProductCart from "./ProductCart.svelte";
    import TotalPrice from "./TotalPrice.svelte";
    import { productsCart } from "../services/store";

    isInCart.update((value) => (value = true));

    let pathCart = "src/img/cart/";

    onDestroy(() => {
        isInCart.update((value) => (value = false));
    });
</script>

<div class="title_ml-5_text-left">
    <p>My Cart</p>
</div>

<div class="">
    {#if $productsCart.length === 0}
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
                <button class="btn justify-content-center"
                    >CONTINUE SHOPPING</button
                >
            </div>
        </div>
    {:else}
        <div class="Principal">
            <div class="row">
                <div class="col-md-4">
                    <p>Product</p>
                </div>
                <div class="col-2">
                    <p class="price">Price</p>
                </div>
                <div class="col-2">
                    <p class="quantity">Quantity</p>
                </div>
                <div class="col-2" />
            </div>
        </div>
        <div class="row">
            <div class="col-md-9">
                {#each $productsCart as { image, name, description, price, stock }}
                    <ProductCart
                        {image}
                        productName={name}
                        productDescription={description}
                        {price}
                        {stock}
                    />
                {/each}
            </div>
            <div class="col">
                <TotalPrice />
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

    .col {
        width: 100px;
    }

    .label {
        margin-top: 40px;
        font-size: 40px;
        font-family: "Bree Serif";
        color: #545454;
    }

    .btn {
        margin-top: 40px;
        margin-bottom: 110px;
        background-color: #fff4f2;
        width: 270px;
        height: 55px;
        font-family: "Bree Serif";
        font-size: 25px;
        padding-bottom: 2px;
        border-bottom: 3px solid #000000;
        border-right: 3px solid #000000;
    }

    .Principal {
        font-size: 2.5rem;
        font-weight: bold;
        margin-left: 3rem;
        margin-bottom: 0.3rem;
    }

    .quantity {
        margin-left: -1.5rem;
    }

    .price {
        margin-left: -1.9rem;
    }

    .Principal div {
        background-color: #fff;
    }
</style>
