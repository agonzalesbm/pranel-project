<script>
    // @ts-nocheck
    import "bootswatch/dist/lux/bootstrap.min.css";
    import Product from "./Product.svelte";

    export let array = [];
</script>

<div class="container ml-5 text-center">
    <div class="row justify-content-center">
        {#each array as { image, imagep, id, category, name, price, stock}}
            <div class="col-md-3">
                <Product
                    handBag={image}
                    handBagPerson={imagep}
                    productId={id}
                    {category}
                    title={name}
                    {price}
                    {stock}
                />
            </div>
        {/each}
    </div>
</div>

<style>
    .col-md-3 {
        width: 18rem;
    }
</style>
