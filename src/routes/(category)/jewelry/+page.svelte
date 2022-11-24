<script>
    // @ts-nocheck
    import Category from "$lib/components/Category.svelte";

    export let data;
    const { result } = data;

    let arrays = [];
    let array = [];
    for (let i = 0; i < 12; i++) {
        if (i !== 0 && i % 4 === 0) {
            arrays.push(array);
            array = [];
            array.push(result[i]);
        } else {
            if (result[i]) {
                array.push(result[i]);
            }
        }
    }
    arrays.push(array);
</script>

<section class="img-fluid img-format-container">
    <img src="/src/lib/img/cover/jewelry-head.jpg" alt="jewelry-head" />
    <p>Rings</p>
</section>
<Category array={arrays[0]} />
<Category array={arrays[1]} />
<Category array={arrays[2]} />

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
