<script>
    import "bootstrap";
    import "bootstrap/dist/css/bootstrap.min.css";
    import Product from "./product.svelte";
</script>

<div class="container-fluid text-center">
    <div class="row">
        <div class="col">
            <Product source="src\img\handbag\handbag-4.jpg" title='bolso1' price='50000$'/>
        </div>
        <div class="col">
            <Product source="src\img\handbag\handbag-3.jpg" title='bolso2' price='5000$'/>
        </div>
        <div class="col">
            <Product source="src\img\handbag\handbag-2.jpg" title='bolso3' price='200$'/>
        </div>
        <div class="col">
            <Product source="src\img\handbag\handbag-1-2.jpg" title='bolso4' price='2000$'/>
        </div>
    </div>
</div>

<style>
    .col-md-3{
        width: 18rem;
    }
    
</style>