<script>
    export let name = "Name default";
    export let price = 0.0;
    export let quantity = 1;
    export let image = "src/lib/img/jewelry/jewelry-1.jpg";
    export let id = "";
    export let category = "";
    category = category === "rings" ? "jewelry" : category;
    let path = category + "/" + id;
</script>

<div class="body-product">
    <div class="img-pr">
        <a data-sveltekit-reload href={path}>
            <img src={image} alt="img-product" />
        </a>
    </div>
    <div class="description-pr">
        <a href={path}>
            <h5 class="name-pr">{name}</h5>
        </a>
        <h6 class="label"><b>x</b>{quantity}</h6>
        <h5 class="price-pr">{(price*quantity).toFixed(2)} $</h5>
    </div>
</div>

<style>
    a:link {
        text-decoration: none;
    }
    a:visited {
        text-decoration: none;
    }
    .body-product {
        min-width: 100%;
        border-style: solid;
        border-color: transparent transparent rgba(42, 41, 41, 0.504)
            transparent;
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

    .label {
        left: 0;
        background-color: #ffded7;
        padding: 0.2em;
        border-radius: 1em;
        width: 3em;
        text-align: center;
        text-transform: lowercase;
    }
</style>
