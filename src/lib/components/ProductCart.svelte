<script>
    import "bootswatch/dist/lux/bootstrap.min.css";
    import { totalPriceCart, deleteElement } from "../services/store";

    export let image = "";
    export let productName = "";
    export let productDescription = "";
    export let price = 0;
    export let stock = 0;
    export let total = 0;
    export let id = "";
    export let category = "";

    let path = category + "/" + id;

    let quantity = 1;
    let priceChange = 0.0;

    $: priceChange = price * quantity;
    const increment = () => {
        if (quantity <= stock - 1) {
            quantity += 1;
            totalPriceCart.update((value) => (value = value + price));
        }
    };
    const decrease = () => {
        if (quantity !== 1) {
            quantity -= 1;
            totalPriceCart.update((value) => value - price);
        }
    };

    const deleteTheElement = () => {
        deleteElement.update((value) => (value = id));
    };
</script>

<div class="container">
    <div class="row align-items-center">
        <div class="col-2">
            <!-- svelte-ignore a11y-missing-attribute -->
            <a href={path}><img class="img-thumbnail" src={image} /></a>
        </div>
        <div class="col-md-4 align-items-center">
            <p><a href={path}>{productName}</a></p>
        </div>
        <div class="col">
            <p>{priceChange.toFixed(2)}</p>
        </div>
        <div class="col">
            <div class="Quantity">
                <div class="second row">
                    <div class="col">
                        <button
                            on:click={increment}
                            class="btn btn-sm justify-content-center"
                            >+
                        </button>
                    </div>
                    <div class="col">
                        {quantity}
                    </div>
                    <div class="col">
                        <button
                            on:click={decrease}
                            class="btn btn-sm justify-content-center">-</button
                        >
                    </div>
                </div>
            </div>
        </div>
        <div class="col-3">
            <div class="Dump">
                <!-- svelte-ignore a11y-missing-attribute -->
                <button
                    on:click={deleteTheElement}
                    class="btn btn-sm justify-content-center"
                    type="button"
                >
                    <img
                        src="src/lib/img/cart/Dump.png"
                        width="40px"
                        height="50px"
                    /></button
                >
            </div>
        </div>
    </div>
</div>

<style>
    a:link { text-decoration:none; } 
    a:visited { text-decoration:none; }
    .row {
        background-color: #fff4f2;
        margin-bottom: 1rem;
    }

    .container {
        margin-left: 1%;
        overflow: hidden;
    }

    .container p {
        margin-left: 0.1%;
        font-size: 160%;
    }

    .Dump button {
        margin: 10%;
        margin-left: 70%;
    }

    .Quantity div {
        height: 3.7rem;
        background-color: #a6a6a6;
        border-radius: 3px;
        font-size: 2rem;
    }

    .Quantity button {
        height: 85%;
        width: 100%;
        font-size: 1.5rem;
        background-color: #fff4f2;
    }
</style>
