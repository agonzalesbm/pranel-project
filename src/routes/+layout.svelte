<script>
    // import 'bootstrap'
    import "bootswatch/dist/lux/bootstrap.min.css";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import { browser } from "$app/environment";

    if (browser) {
        window.localStorage.getItem("cart") === null
            ? window.localStorage.setItem("cart", JSON.stringify([]))
            : "";
        window.localStorage.getItem("current") === null
            ? window.localStorage.setItem("current", JSON.stringify({ 
                bags: false, 
                shoes: false, 
                jewelry: false 
            }))
            : "";
    }
</script>

<Header />
<slot />
<Footer />
