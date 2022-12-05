<script>
    import "animate.css";

    export let category = "default";
    export let pathIcon = "";
</script>

<section
    class="img-fluid img-format-container animate__animated animate__fadeIn">
    <div class="title">
        <img src={pathIcon} alt="" class="icon">
        <p>{category}</p>
    </div>

</section>

<style>
    section{
        margin: 0.5em 0em;
        box-shadow: 0 0 0.2em #8f8e8e;
        border: solid 0.2em;
        border-color: black transparent;
    }

    .title{
        display: flex;
        margin-left:20%;
    }

    .title img {
        height: 4em;
        margin: 1.5em 1em;
        transform: scaleX(-1);
    }

    .img-format-container {
        width: 100%;
        height: 7rem;
        position: relative;
        background-color: white;
        align-items: center;
        justify-content: center;
        color: black;
    }

    p{
        font-size: 5em;
    }

</style>
