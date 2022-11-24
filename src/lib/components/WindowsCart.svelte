<script>
    import {isVisibleCart} from '../services/store';
    let isClick = false;
    isVisibleCart.subscribe(value=>isClick= value)
    const onClick = () => {
        isVisibleCart.update((value) => (value = !value));
    };
</script>

<div class:visually-hidden={!isClick}>
    <div class="ventana">
        <div class="subHeader">
            <a href="/cart"><span style="color: black">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="white"
                    class="bi bi-cart-fill"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    />
                </svg></span
            >
        </a>
            <div class="controls">
                <button on:click={onClick} class="buton"> &gt; </button>
            </div>
        </div>
        
            <div class="windows">
                <div class="emptyCart">
                    <img src="src/lib/img/cart/cartEmpty.png" width="40%" height="40%"/>
                    <p class="label">YOUR SHOPPING CART IS EMPTY</p>
                    <button class="btn justify-content-center"
                        >CONTINUE SHOPPING</button
                    >
                </div>
            </div>
        
    </div>
</div>

<style>
    .ventana {
        position: absolute;
        top: 0;
        background-color: #000000;
        width: 20%;
        height: 100vh;
        color: black;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 18px;
        text-align: center;
        padding: 33px;
        right: 0%;
        z-index: 999;
        padding: 0;
    }

    .windows {
        background-color: #fdcbc1;
        text-align: center;
        color: black;
        height: 100vh;
        top: 5vh;
        position: relative;
    }

    .emptyCart {
        top: 30vh;
        position: absolute;
        padding: 10;
    }

    .emptyCart img, p, button{
        margin: 0.5em;
    }

    .controls {
        text-align: right;
        top: calc(50% - 1.2rem);
        background: transparent;
    }

    .ventana button {
        background: transparent;
        color: rgb(255, 249, 249);
        border-color: transparent;
    }

    .windows button {
        background: white;
        color: black;
        border-color: black;
        text-align: center;
    }

    button:hover,
    button:focus {
        background:  white;
        color:black;
        border-radius: 10px;
    }
    .subHeader a{
        position: absolute;
        top: calc(3% - 1.2rem);
        left: 1em;
    }
    .subHeader button{
        position: absolute;
        top: 0;
        right: 0;
        top: calc(2% - 1.2rem);
    }
</style>