<script>
    import "animate.css";

    export let category = "default";
</script>

<section
    class="img-fluid img-format-container animate__animated animate__fadeIn">
    <p>{category}</p>
</section>

<style>
    section{
        margin: 10px;
    }


    .img-format-container {
        width: 100%;
        height: 8rem;
        position: relative;
        background-color: rgba(0, 0, 0);
        align-items: center;
        justify-content: center;
        color: white;
    }

    p{
        width: 100%;
        font-size: 5em;
        margin-left:20%;
    }

</style>
