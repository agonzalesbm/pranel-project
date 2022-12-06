<script>
    export let category = "default";
    export let path = "/";
</script>

<div class="message">
    <h1>There are no products on {category} page</h1>
    <a href={path} class="btn btn-dark">Restore page</a>
</div>

<style>
    .message {
        text-align: center !important; 
    }
    h1{
        margin: 5em;
        margin-bottom: 1em;
    }

    .btn {
        --bg-btn: black;
        --color-font: white;
        background-color: var(--bg-btn);
        border: solid 2px black;
        color: var(--color-font);
        border-radius: 5px;
    }

    .btn:hover {
        --bg-btn: white;
        --color-font: black;
    }


</style>