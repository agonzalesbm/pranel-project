<script>
    // import 'bootstrap'
    import "bootswatch/dist/lux/bootstrap.min.css";
    import Footer from "$lib/components/Footer.svelte";
import Header from "$lib/components/Header.svelte";
</script>
<Header />
<slot />
<Footer />