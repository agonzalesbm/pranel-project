<script>
    import "bootstrap-icons/font/bootstrap-icons.css";
    export let image = "";
    export let productName = "";
    export let productDescription = "";
    export let price = "";
    export let quantity = 0;

</script>

<!--<div class = "Principal">
    <div class="row">
      <div class = "col-md-5">
          Product
      </div>
      <div class="col-2">
          Price
      </div>
      <div class="col-2">
          <p>Quantity </p>
      </div>
      <div class="col-2">
          
      </div>
    </div>
</div>
-->

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
                        <button class="btn btn-sm justify-content-center">+</button>
                    </div>
                    <div class = "col">
                        {quantity}
                    </div>
                    <div class = "col">
                        <button class="btn btn-sm justify-content-center">-</button>
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
        margin-left: 50px;
    }

    .container p{
        margin-left: 10px;
        font-size: 25px;
    }

    .Dump button{
        margin: 105px;
        margin-left: 180px;
    }

    .Quantity div{
        height: 55px;
        background-color: #a6a6a6;
        border-radius: 3px;
        font-size: 30px;
    }

    .Quantity button{
        height: 44px;
        width: 30px;
        font-size: 20px;
        background-color: #fff4f2;
    }

    .Principal {
        font-size: 25px;
        margin-left: 62px;
        margin-bottom: 5px;
    }

    .Principal p{
        margin-left: 0px;
    }

    .Principal div{
        background-color: #fff;
    }
</style>
