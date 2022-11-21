<script>
    import "bootswatch/dist/lux/bootstrap.min.css";
    import Product from "./Product.svelte";

    let pathBag = "src/img/handbag/handbag-";
    let pathJewerly = "src/img/jewelry/jewelry-";
    const array = [
        {
            handBag: pathBag + "1.jpg",
            handBagPerson: pathBag + "1-person.jpg",
        },
        {
            handBag: pathBag + "2.jpg",
            handBagPerson: pathBag + "2-person.jpg",
        },
        {
            handBag: pathBag + "3.jpg",
            handBagPerson: pathBag + "3-person.jpg",
        },
        {
            handBag: pathJewerly + "5.jpg",
            handBagPerson: pathJewerly + "5p.jpg",
        },
    ];
</script>

<div class="container ml-5 text-center">
    <div class="row justify-content-center">
        {#each array as element}
            <div class="col-md-3">
                <Product
                    handBag = {element.handBag}
                    handBagPerson = {element.handBagPerson}
                    title="bolso1"
                    price="50000$"
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
