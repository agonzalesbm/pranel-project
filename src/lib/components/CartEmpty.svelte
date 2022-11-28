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
<!--<div class="container ml-5 text-center">
    <div class="row justify-content-center">
        <div class="emptyCart"> 
            <img src="src\lib\img\cart\cartEmpty.png" width="300" height="300">
        </div>
        <p class = "label">YOUR SHOPPING CART IS EMPTY</p>
        <button class="btn justify-content-center">CONTINUE SHOPPING</button>
    </div>
</div>
-->

<div class="">
    <div class="row">
        <div class="col-md-9">
            <ProductCart
                image="src\lib\img\cart\cartEmpty.png"
                productName="Product Name"
                productDescription="Product Description"
                price="500 $"
                quantity="2"
            />
            {#each $productsCart as { image, name, description, price, stock }}
                <ProductCart
                    {image}
                    productName={name}
                    productDescription={description}
                    {price}
                    quantity={stock}
                />
            {/each}
        </div>
        <div class="col">
            <TotalPrice />
        </div>
    </div>
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
</style>
