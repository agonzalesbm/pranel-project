<script>
// @ts-nocheck
    import { page } from "$app/stores";
</script>

<div>
    <h1 class="glitched">  </h1>
    <h2>{$page.status}: {$page.error.message}</h2>

    <a href="/" class="btn btn-outline-dark">Go to Home</a>
</div>

<style>
    div {
        height: 80vh;
        background-image: url('$lib/img/cover/ErrorPage.jpg');
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
        text-align: center;
        padding: 5em;
    }

    h2 {
        font-family: 'Times New Roman', Times, serif;
        font-size: 4em;
        text-shadow: 2px 2px 5px rgb(242, 224, 224);
    }

    h1 {

    }
</style>
