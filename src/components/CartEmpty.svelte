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
    <p>My Cart</p>
</div>
<div class="container ml-5 text-center">
    <div class="row justify-content-center">
        <div class="emptyCart"> 
            <img src="src\img\cart\cartEmpty.png" width="300" height="300">
        </div>
        <p class = "label">YOUR SHOPPING CART IS EMPTY</p>
        <button class="btn justify-content-center">CONTINUE SHOPPING</button>
    </div>
</div>

<style>
    @import url(//db.onlinewebfonts.com/c/2a565fc8eb19fe770464e0d4ee172b96?family=Bree+Serif);
    .title_ml-5_text-left{
        margin-left: 90px;
        font-size: 40px;
        font-family: 'Bree Serif';
    }

    .label {
        margin-top: 40px;
        font-size: 40px;
        font-family: 'Bree Serif';
        color: #545454;
    }

    .btn{
        margin-top: 40px;
        margin-bottom: 110px;
        background-color: #fff4f2;
        width: 270px;
        height: 55px;
        font-family: 'Bree Serif';
        font-size: 25px;
        padding-bottom: 2px;
        border-bottom: 3px solid #000000;
        border-right: 3px solid #000000;
        
    }
    
</style>