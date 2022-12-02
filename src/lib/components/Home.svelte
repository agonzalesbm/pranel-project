<script>
    // @ts-nocheck
    import "bootswatch/dist/lux/bootstrap.min.css";
    import { clickBags, clickShoes, clickJewelry } from "$lib/services/store";

    function clickBagsButton() {
        clickBags.update(value => value = true);
        clickShoes.update(value => value = false);
        clickJewelry.update(value => value = false);
    }

    function clickJewelryButton() {
        clickBags.update(value => value = false);
        clickShoes.update(value => value = false);
        clickJewelry.update(value => value = true);
    }

    function clickShoesButton() {
        clickBags.update(value => value = false);
        clickShoes.update(value => value = true);
        clickJewelry.update(value => value = false);
    }
</script>

<div>
    <!-- Bootstrap -->
    <div id="carouselCover" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
            <button
                type="button"
                data-bs-target="#carouselCover"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
            />
            <button
                type="button"
                data-bs-target="#carouselCover"
                data-bs-slide-to="1"
                aria-label="Slide 2"
            />
            <button
                type="button"
                data-bs-target="#carouselCover"
                data-bs-slide-to="2"
                aria-label="Slide 3"
            />
        </div>

        <div class="carousel-inner">
            <div
                class="carousel-item active"
                style="background-image: linear-gradient(rgba(33, 29, 29, 0.763), rgba(0, 0, 0, 0.8)), url('src/lib/img/cover/bolsos.jpg');"
            >
                <img
                    src="src/lib/img/cover/bolsos.jpg"
                    class="d-block w-100"
                    alt="Bags"
                />

                <button class="svg-wrapper" on:click={clickBagsButton}>
                    <a href="/bags">
                        <svg height="90" width="600">
                            <rect class="shape" height="73" width="280" />
                        </svg>
                        <div class="slide-title">See more Bags</div>
                    </a>
                </button>
            </div>
            <div
                class="carousel-item "
                style="background-image: linear-gradient(rgba(33, 29, 29, 0.763), rgba(0, 0, 0, 0.8)), url('src/lib/img/cover/ring.jpg');"
            >
                <img
                    src="src/lib/img/cover/ring.jpg"
                    class="d-block w-100"
                    alt="Ring"
                />
                <button class="svg-wrapper text-align-center" on:click={clickJewelryButton}>
                    <a href="/jewelry">
                        <svg height="90" width="600">
                            <rect class="shape" height="73" width="280" />
                        </svg>
                        <div class="slide-title">See more Jewelry</div>
                    </a>
                </button>
            </div>
            <div
                class="carousel-item "
                style="background-image: linear-gradient(rgba(33, 29, 29, 0.763), rgba(0, 0, 0, 0.8)), url('src/lib/img/cover/shoes2.jpg');"
            >
                <img
                    src="src/lib/img/cover/shoes2.jpg"
                    class="d-block w-100"
                    alt="Shoes"
                />
                <button class="svg-wrapper" on:click={clickShoesButton}>
                    <a href="/shoes">
                        <svg height="90" width="600">
                            <rect class="shape" height="73" width="280" />
                        </svg>
                        <div class="slide-title">See more Shoes</div>
                    </a>
                </button>
            </div>
        </div>

        <!-- arrow < > -->
        <button
            class="carousel-control-prev arrow"
            type="button"
            data-bs-target="#carouselCover"
            data-bs-slide="prev"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true" />
            <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next arrow"
            type="button"
            data-bs-target="#carouselCover"
            data-bs-slide="next"
        >
            <span class="carousel-control-next-icon" aria-hidden="true" />
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</div>

<style>
    div img {
        height: 100vh;
        object-fit: cover;
        object-position: center;
        transition: transform 0.75s;
        inset: 0;
        opacity: 0.9;
        clip-path: polygon(20% 0%, 100% 20%, 80% 100%, 0% 80%);
        transition: 0.3s;
        display: block;
    }

    div:hover img {
        opacity: 1;
        transform: scale(1.3);
        cursor: pointer;
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }

    .svg-wrapper {
        top: 50vh;
        left: 40vh;
        position: absolute;
        margin: 0 auto;
        width: 20em;
        height: 7em;
        background-color: rgba(255, 222, 215, 0.8);
        padding: 1.2em;
        display: flex;
        justify-self: center;
        border-width: 0px;
        border-radius: 10px;
    }

    .shape {
        stroke-dasharray: 90 270;
        stroke-dashoffset: -600;
        stroke-width: 5px;
        fill: transparent;
        stroke: black;
        border-bottom: 5px solid black;
        transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
    }

    .slide-title {
        font-family: "Gill Sans MT";
        font-size: 2em;
        line-height: 32px;
        letter-spacing: 1px;
        color: black;
        position: absolute;
        top: 32%;
        left: 16%;
        background-color: rgba(254, 242, 242, 0);
    }

    div:hover .shape {
        inset: 0;
        stroke-width: 0.5em;
        stroke-dasharray: 760;
        stroke-dashoffset: 0;
    }

    .carousel-item {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }
</style>
