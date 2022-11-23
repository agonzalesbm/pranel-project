<script>
    // @ts-nocheck

    import { onDestroy } from "svelte";
    import "bootswatch/dist/lux/bootstrap.min.css";
    import { isInProduct } from "../../../../services/store";
    import ProductPage from '../../../../components/ProductPage.svelte'
    isInProduct.update((value) => (value = true));
    onDestroy(() => {
            isInProduct.update((value) => (value = false));
    });
    export let data
</script>
<ProductPage {data} firstImg = {data.image} secondImg = {data.imagep}/>
