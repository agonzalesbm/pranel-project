<script>
    export let name = "Name default";
    export let price = 0.0;
    export let image = "src/lib/img/jewelry/jewelry-1.jpg";
</script>

<div class="body-product">
    <div class="img-pr">
        <img src={image} alt="img-product" />
    </div>
    <div class="description-pr">
        <h5 class="name-pr">{name}</h5>
        <h5 class="price-pr">{price} $</h5>
    </div>
</div>

<style>
    .body-product {
        min-width: 100%;
        border-style: solid;
        border-color: transparent transparent rgba(1, 1, 1, 0.783) transparent;
        padding: 0.1em;
        position: relative;
        display: inline;
        display: flex;
        height: 6em;
        z-index: 1;
    }

    img {
    min-width: 100px;
    max-width: 150px;
    max-height: 85%;
    align-items: center;
    }

    .name-pr {
        font-weight: bold;
        font-size: 0.8em;
    }

    .description-pr {
        width: calc(100% - 80px);
        text-align: left;
        padding-left: 1em;
    }

    .price-pr {
        text-align: right;
        font-size: 0.8em;
    }
</style>
