<script>
        // @ts-nocheck

        import { onDestroy } from "svelte";
        import "bootswatch/dist/lux/bootstrap.min.css";
        import { isInProduct } from "$lib/services/store";
        import ProductPage from "$lib/components/ProductPage.svelte";
        isInProduct.update((value) => (value = true));
        onDestroy(() => {
                isInProduct.update((value) => (value = false));
        });
        export let data;
</script>

<ProductPage {data} firstImg={data.image} secondImg={data.imagep} arrayInfo={data.specifiedBulletText.split("*").splice(1)}/>