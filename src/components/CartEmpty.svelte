<script>
    /*import "bootstrap";*/
    import "bootstrap/dist/css/bootstrap.min.css";
    import {isInCart} from '../services/store'
    import Product from "./Product.svelte";
    import { onDestroy } from 'svelte';
    isInCart.update(value => value = true)

    let pathCart = "src/img/cart/";
    
    onDestroy(() => {
		isInCart.update(value => value = false)
	});
</script>
<div class="title_ml-5_text-left">
    <p>MY CART</p>
</div>
<div class="container ml-5 text-center">
    <div class="row justify-content-center">
        <div class="emptyCart"> 
            <a href="/"><img src="src\img\cart\cartEmpty.png" width="300" height="300"></a>
        </div>
        <p class = "label">YOUR SHOPPING CART IS EMPTY</p>
        <button class="btn justify-content-center">CONTINUE SHOPPING</button>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
    .title_ml-5_text-left{
        margin-left: 90px;
        font-size: 40px;
        font-family: serif;
    }

    .emptyCart {
        color: #545454;
    }
    .label {
        margin-top: 40px;
        font-size: 40px;
        font-family: 'Bodoni bold';
        color: #545454;
    }

    .btn{
        margin-top: 40px;
        margin-bottom: 110px;
        background-color: #fff4f2;
        width: 300px;
        height: 55px;
        font-family: serif;
        font-size: 25px;
    }
</style>