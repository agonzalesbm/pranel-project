<script>
</script>

<div class="body-product">
    <div class="img-pr">
        <img src="src/lib/img/jewelry/jewelry-1.jpg" alt="img-product">
    </div>
    <div class="description-pr">
        <h5 class="name-pr">Product name 1 - Example I-TEST 1</h5>
        <h5 class="price-pr">1000.00 $</h5>
    </div>
</div>

<style>
    .body-product {
        min-width: 100%;
        border-style: solid;
        border-color: transparent transparent rgba(42, 41, 41, 0.504) transparent;
        border-radius: 0.3em;
        padding: 0.1em;
        position: relative;
        display: inline;
        display: flex;
        height: 6em;
    }

    img {
        min-width: 100px;
        max-width: 150px;
        max-height: 85%;
        align-items: center;
    }

    .name-pr{
        font-weight: bold;
        font-size: 0.8em;
    }

    .description-pr{
        width: calc(100% - 80px);
        text-align: left;
        padding-left: 1em;
    }

    .price-pr{
        text-align: right;
        font-size: 0.8em;
    }
</style>