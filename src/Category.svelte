<script>
    import "bootstrap";
    import "bootstrap/dist/css/bootstrap.min.css";
    import Product from "./product.svelte";
</script>

<div class="container">
    <div class="row">
        
            <div class="col-md-3">
            <Product source="src\img\handbag\handbag-4.jpg" title='bolso1'/>
            </div>
            <div class="col-md-3">
            <Product source="src\img\handbag\handbag-3.jpg" title='bolso2' />
            </div>
            <div class="col-md-3">
                <Product source="src\img\handbag\handbag-2.jpg" title='bolso3'/>
            </div>
            <div class="col-md-3">
                <Product source="src\img\handbag\handbag-1-2.jpg" title='bolso4'/>
            </div>
        
    </div>
    
</div>

<style>
</style>