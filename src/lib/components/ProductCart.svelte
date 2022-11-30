<script>
    import "bootstrap-icons/font/bootstrap-icons.css";
    export let image = "";
    export let productName = "";
    export let productDescription = "";
    export let price = 0;
    let quantity = 1;
    export let stock = 0;
    let priceChange = 0.0

    $: priceChange = price * quantity

    const increment = () => {
        if (quantity <= stock -1){
            quantity += 1
        }
    };
    const decrease = () => {
        if (quantity !== 1){
            quantity -= 1
        }   
    };
    
</script>

<div class = "container">
      <div class="row align-items-center">
        <div class = "col-2">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img class = "img-thumbnail" src= {image}/>
        </div>
        <div class="col-md-4 align-items-center">
            <p>{productName}</p>
        </div>
        <div class="col">
            <p>{priceChange.toFixed(2)}</p>
        </div>
        <div class="col">
            <div class = "Quantity">
                <div class = "second row">
                    <div class = "col">
                        <button on:click={increment} class="btn btn-sm justify-content-center">+
                            
                        </button>
                    </div>
                    <div class = "col">
                        {quantity}
                    </div>
                    <div class = "col">
                        <button on:click={decrease} class="btn btn-sm justify-content-center">-</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-3">
            <div class="Dump"><!-- svelte-ignore a11y-missing-attribute -->
                <button class="btn btn-sm justify-content-center" type="button"> <img src="src/lib/img/cart/Dump.png" width=40px height=50px></button>
            </div>
        </div>
      </div>
</div>
<style>
    .row {
        background-color: #fff4f2;
        margin-bottom: 1rem;
    }
    
    .container{
        margin-left: 1%;
    }

    .container p{
        margin-left: 0.1%;
        font-size: 160%;
    }

    .Dump button{
        margin: 10%;
        margin-left: 70%;
    }

    .Quantity div{
        height: 3.7rem;
        background-color: #a6a6a6;
        border-radius: 3px;
        font-size: 2rem;
    }

    .Quantity button{
        height: 3rem;
        width: 2rem;
        font-size: 1.5rem;
        background-color: #fff4f2;
    }
</style>
