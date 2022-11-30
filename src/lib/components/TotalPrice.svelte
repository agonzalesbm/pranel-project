<script>
  export let TotalPrice = 0;
</script>

<div class="container">
  <div class="card bg-secondary mb-3" style="max-width: 20rem;">
      <div class="card-header">Total:</div>
      <div class="card-body">
        <h4 class="total_price">{TotalPrice} $</h4>
        <div class= "Pay">
          <button class="btn btn-sm justify-content-center">Pay                    
          </button>
        </div>
      </div>
    </div>
</div>

  <style>

    .container div{
      background-color: #fff4f2;
      border-color: none;
    }

    .total_price {
      font-size: 300%;
    }

    .Pay button{
        height: 33%;
        width: 100%;
        font-size: 150%;
        background-color: #a6a6a6;
    }
  </style>