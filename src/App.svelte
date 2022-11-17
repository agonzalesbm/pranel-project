<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import Header from './Header.svelte'
  import Category from './Category.svelte';
  import Footer from './footer_sec/FooterBody.svelte'
  import Header from './Header.svelte';
  import Home from './lib/Home.svelte'
</script>

<main>  
  <Header />
  <Category />
  <Category />
  <div class="carusel">
    <Home />
  </div>
  <Footer />
</main>

<style>
  .logo {
    height: 6em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>