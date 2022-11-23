<script>
    // @ts-nocheck
    import "bootswatch/dist/lux/bootstrap.min.css";
    export let data;
    let imgSourc = data.image;
    $: imgSourc
    export let firstImg = "";
    export let secondImg = "";
    const chnageOverHoverFirstImg = () => {
        imgSourc = firstImg
    };
    const chnageOverHoverSecondImg = () => {
        imgSourc = secondImg
    };
</script>

<div class="main-wrapper">
    <div class="container">
        <div class="product-div">
            <div class="product-div-left">
                <div class="img-container">
                    <img src={imgSourc} id="actImg" />
                </div>
                <div class="hover-container">
                    <div>
                        <img
                            src={secondImg}
                            on:mouseover={chnageOverHoverSecondImg}
                        />
                    </div>
                    <div>
                        <img src={firstImg} on:mouseover={chnageOverHoverFirstImg} />
                    </div>
                </div>
            </div>
            <div class="product-div-right">
                <span class="product-name">{data.name}</span>
                <span class="product-refrence"
                    >Product Reference : {data.id}</span
                >
                <span class="product-size">Product Size : {data.size}</span>
                <p class="product-description">{data.description}</p>
                <span class="product-price">Price: {data.price}$</span>
                <div class="btn-groups">
                    <button type="button" class="add-cart-btn">
                        <i class="fas fa-shopping-cart" />add to cart</button
                    >
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    * {
        padding: 0;
        margin: 0;
        color: black;
    }

    html,
    body {
        font-family: "Roboto", sans-serif;
    }

    img {
        width: 100%;
        display: block;
    }

    .main-wrapper {
        min-height: 100vh;
        background-color: whitesmoke;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .container {
        max-width: 1200px;
        padding: 0 1rem;
        margin: 0 auto;
    }
    .product-div {
        margin: 1rem 0;
        padding: 2rem 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        background-color: #ffded7;
        border-radius: 3px;
        column-gap: 10px;
    }
    .product-div-left {
        padding: 20px;
    }
    .product-div-right {
        padding: 20px;
    }
    .img-container img {
        width: 250px;
        margin: 0 auto;
    }
    .hover-container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin-top: 32px;
    }
    .hover-container div {
        border: 2px solid rgba(252, 160, 175, 0.7);
        padding: 1rem;
        border-radius: 3px;
        margin: 0 4px 8px 4px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .active {
        border-color: rgb(255, 145, 163) !important;
    }
    .hover-container div:hover {
        border-color: rgb(255, 145, 163);
    }
    .hover-container div img {
        width: 60px;
        cursor: pointer;
    }
    .product-div-right span {
        display: block;
    }
    .product-name {
        font-size: 26px;
        margin-bottom: 22px;
        font-weight: 700;
        letter-spacing: 1px;
        opacity: 0.9;
    }

    .product-price {
        font-weight: 700;
        font-size: 25px;
        opacity: 1;
        font-weight: 500;
    }

    .product-description {
        font-weight: 18px;
        line-height: 1.6;
        font-weight: 300;
        opacity: 0.9;
        margin-top: 22px;
    }
    .btn-groups {
        margin-top: 22px;
    }
    .btn-groups button {
        display: inline-block;
        font-size: 16px;
        font-family: inherit;
        text-transform: uppercase;
        padding: 15px 16px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    .btn-groups button .fas {
        margin-right: 8px;
    }
    .add-cart-btn {
        border-radius: 15px;
        background: pink;
        padding: 20px;
        width: 200px;
        height: 50px;
    }
    .add-cart-btn:hover {
        background-color: #fff;
        color: black;
    }

    @media screen and (max-width: 992px) {
        .product-div {
            grid-template-columns: 100%;
        }
        .product-div-right {
            text-align: center;
        }
        .product-rating {
            justify-content: center;
        }
        .product-description {
            max-width: 400px;
            margin-right: auto;
            margin-left: auto;
        }
    }

    @media screen and (max-width: 400px) {
        .btn-groups button {
            width: 100%;
            margin-bottom: 10px;
        }
    }
</style>
