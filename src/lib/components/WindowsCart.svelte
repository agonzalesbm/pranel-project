<script>
    import {isVisibleCart} from '../services/store';
</script>
<div>
    <div class="ventana">
        <div class="subHeader">
            <a href="#"><span style="color: black">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
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
                <button class="buton"> &gt; </button>
            </div>
        </div>
        
            <div class="windows">
                <div class="emptyCart">
                    <img src="src\img\cart\cartEmpty.png" width="40%" height="40%"/>
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
        background-color: #ffded7;
        width: 20%;
        height: 60%;
        color: black;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 18px;
        text-align: center;
        padding: 33px;
        position: absolute;
        right: 0%;
        top: 90px;
        z-index: 999;
        padding: 0%;
    }

    .windows {
        background-color: #fdcbc1;
        text-align: center;
        color: black;
        height: 100%;
        top: 10%;
        position: relative;
    }

    .controls {
        text-align: right;
        top: calc(50% - 1.2rem);
        background: transparent;
    }

    .ventana button {
        background: transparent;
        color: black;
        border-color: transparent;
    }

    .windows button {
        background: white;
        color: black;
        border-color: black;
        text-align: center;
    }

    .windows button {
        background: rgb(255, 234, 234);
        color: black;
        border-color: black;
        text-align: center;
    }

    button:hover,
    button:focus {
        background: white;
    }
    .subHeader a{
        position: absolute;
        top: 0;
        left: 1em;
    }
    .subHeader button{
        position: absolute;
        top: 0;
        right: 0;
    }
</style>