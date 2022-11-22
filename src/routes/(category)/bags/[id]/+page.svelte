<script>
     import { onDestroy } from 'svelte';
    import 'bootswatch/dist/lux/bootstrap.min.css'
    import {isInProduct} from '../../../../services/store'
    isInProduct.update( value => value = true);
	onDestroy(() => {
        isInProduct.update( value => value = false);        
	});
</script>

<h1>Product</h1>