<script>
    import "animate.css";
    import logo from "../img/LogoPranel.svg";
    import {
        isAnError,
        isInCart,
        isInCategory,
        isVisibleCart,
    } from "../services/store";
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
            <a href = "/cart" class="icon-cart">
                <span style="color: black"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </span>
            <div class="container">
                <div class="title">
                    <h5>List of products</h5>
                </div>
                <div class="popover-body">
                    <h5 class="empty-message">Cart is empty</h5>
                </div>
                <div class="popover-footer">
                    <h5>Total: </h5><h5 style="right: 1em;position:absolute;" > 0.00 $</h5>
                    
                </div>
            </div>
            
        </a>
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
                <WindowsCart />
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
                    <li><a href="/shoes">Shoes</a></li>
                    <li><a href="/bags">Bags</a></li>
                    <li><a href="/jewelry">Jewelry</a></li>
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
    }

    .container {
        visibility: hidden;
        background-color: white;
        padding: 15px;
        position: absolute;
        margin-left: -11em;
        margin-top: 10px;
        height: auto;
        width: 12em;
        border-style: solid;
        z-index: 10;
        min-height: 3em;
        max-height: calc(100vh - 30vh);
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
        overflow: hidden;
        max-height: calc(100vh - 50vh);
        min-height: 0.5em;
    }
    
    .empty-message {
        color: #777777;
        margin: 1em;
    }

    .title{
        border-color: transparent transparent black transparent;
        border-style: solid;
        padding-bottom: 0.2em;
    }

    .title, .popover-body {
        text-align: center;
    }

    .popover-footer {
        display: inline;
        display: flex;
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
