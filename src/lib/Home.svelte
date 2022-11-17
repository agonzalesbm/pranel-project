<script>
</script>

<main>
    <!-- Bootstrap -->
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
    />
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
            <div class="carousel-item active" style="background-image: linear-gradient(rgba(33, 29, 29, 0.763), rgba(0, 0, 0, 0.8)), url('/cover/bag-dramatic.svg');">
                <img
                    src="/cover/bag-dramatic.svg"
                    class="d-block w-100"
                    alt="Bags"
                />

                <button class="svg-wrapper" >
                    <svg height="90" width="600">
                        <rect class="shape" height="73" width="280" />
                    </svg>
                    <div class="slide-title">See more Bags</div>
                </button>
            </div>
            <div class="carousel-item " style="background-image: linear-gradient(rgba(33, 29, 29, 0.763), rgba(0, 0, 0, 0.8)), url('/cover/woman-ring.svg');">
                <img
                    src="/cover/woman-ring.svg"
                    class="d-block w-100"
                    alt="Ring"
                />
                <div class="svg-wrapper">
                    <svg height="90" width="600">
                        <rect class="shape" height="73" width="280" />
                    </svg>
                    <div class="slide-title">See more Rings</div>
                </div>
            </div>
            <div class="carousel-item " style="background-image: linear-gradient(rgba(33, 29, 29, 0.763), rgba(0, 0, 0, 0.8)), url('/cover/zapatos-drama.svg');">
                <img
                    src="/cover/zapatos-drama.svg"
                    class="d-block w-100"
                    alt="Shoes"
                />
                <div class="svg-wrapper">
                    <svg height="90" width="600">
                        <rect class="shape" height="73" width="280" />
                    </svg>
                    <div class="slide-title">See more Shoes</div>
                </div>
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

    <!-- Bootstrap JS -->
    <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"
    ></script>
</main>

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
        transform: scale(1.30);
        cursor: pointer;
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }

    .svg-wrapper {
        top: 50vh;
        left: 33%;
        position: absolute;
        margin: 0 auto;
        width: 310px;
        height: 100px;
        background-color: rgba(254, 242, 242, 0.8);
        padding: 14px;
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
        font-size: 32px;
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
        stroke-width: 5px;
        stroke-dasharray: 760;
        stroke-dashoffset: 0;
    }

    .carousel-item {
        background-position:center;
        background-repeat:no-repeat;
        background-size:cover;
        background-attachment: fixed;
    }
</style>
