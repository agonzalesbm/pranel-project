<script>
    // @ts-nocheck
    import "bootswatch/dist/lux/bootstrap.min.css";
    import Product from "./Product.svelte"; 

    export let array = []; 
</script>

<div class="container ml-5 text-center">
    <div class="row justify-content-center">
        {#each array as element (element.id)}
            <div class="col-md-3">
            <Product
            handBag = {element.image}
            handBagPerson = {element.imagep}
            productId = {element.id}
            category = {element.category}
            title={element.name}
            price={element.price}
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
