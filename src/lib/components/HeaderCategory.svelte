<script>
    import "animate.css";

    export let category = "default";
    export let pathImage = "";
</script>

<section
    class="img-fluid img-format-container animate__animated animate__fadeIn">
    <img src={pathImage} alt="jewelry-head" />
    <p>{category}</p>
</section>

<style>
    .img-format-container {
        width: 120rem;
        height: 8rem;
        overflow: hidden;
        position: relative;
        background-color: black;
        margin-top: 1%;
    }

    .img-format-container img {
        width: 25%;
        height: 100%;
    }

    .img-format-container p {
        font-size: 5rem;
        color: white;
        position: absolute;
        top: 5%;
        left: 75%;
    }

    @media screen and (max-width: 1025px) {
        .img-format-container p {
            font-size: 5rem;
            color: white;
            position: absolute;
            top: 5%;
            left: 65%;
        }
    }

    @media screen and (max-width: 769px) {
        .img-format-container p {
            font-size: 5rem;
            color: white;
            position: absolute;
            top: 5%;
            left: 55%;
        }
    }

    @media screen and (max-width: 726px) {
        .img-format-container p {
            font-size: 3rem;
            color: white;
            position: absolute;
            top: 20%;
            left: 55%;
        }

        .img-format-container img {
            width: 45%;
            height: 100%;
        }
    }

    @media screen and (max-width: 321px) {
        .img-format-container p {
            font-size: 3rem;
            color: white;
            position: absolute;
            top: 20%;
            left: 40%;
        }

        .img-format-container img {
            width: 45%;
            height: 100%;
        }
    }
</style>
