<script>
    import "bootstrap-icons/font/bootstrap-icons.css";
    export let image = "";
    export let productName = "";
    export let productDescription = "";
    export let price = "";
    export let quantity = "";

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
                        <button class="btn btn-outline-primary btn-sm justify-content-center">+</button>
                    </div>
                    <div class = "col">
                        {quantity}
                    </div>
                    <div class = "col">
                        <button class="btn btn-outline-primary btn-sm justify-content-center">-</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-3">
            <img class = "img-thumbnail" src="src/lib/img/cart/Dump.png" width=50px height=50px>
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
