<script>
    import "bootstrap-icons/font/bootstrap-icons.css";
    export let image = "";
    export let productName = "";
    export let productDescription = "";
    export let price = "";
    let quantity = 1;
    export let stock = 0;

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

<div class = "Principal">
    <div class="row">
      <div class = "col-md-5">
          <p>Product</p>
      </div>
      <div class="col-2">
        <p class= "price">Price</p>
      </div>
      <div class="col-2">
          <p class="quantity">Quantity </p>
      </div>
      <div class="col-2">
          
      </div>
    </div>
</div>


<div class = "container">
      <div class="row align-items-center">
        <div class = "col-2">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img class = "img-thumbnail" src= {image}/>
        </div>
        <div class="col-md-4 align-items-center">
            <p>{productName}</p>
            <p>{productDescription}</p>
        </div>
        <div class="col">
            <p>{price}</p>
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

    .Principal {
        font-size: 2.5rem;
        font-weight: bold;
        margin-left: 3rem;
        margin-bottom: 0.3rem;
    }

    .quantity {
        margin-left: -1.5rem;
    }

    .price{
        margin-left: 2.5rem;
    }

    .Principal div{
        background-color: #fff;
    }
</style>
