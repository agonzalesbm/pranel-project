<script>
    import "animate.css";
    export let handBag = "./src/img/handbag/handbag-1.jpg";
    export let handBagPerson = "./src/img/handbag/handbag-1-person.jpg";
    let isOutOfContainer = true;

    const mouseOver = () => {
        isOutOfContainer = false;
    };
    const mouseOut = () => {
        isOutOfContainer = true;
    };
</script>

<div>
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <img
        class="{isOutOfContainer
            ? ''
            : 'visually-hidden '} animate__animated {isOutOfContainer
            ? 'animate__fadeIn'
            : 'animate__fadeOut'} animate__faster card-img-top img-fluid"
        on:mouseover={mouseOver}
        on:mouseout={mouseOut}
        src={handBag}
        alt="hola"
        height="275"
    />
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <img
        class="{isOutOfContainer
            ? 'visually-hidden'
            : ''} animate__animated {isOutOfContainer
            ? 'animate__fadeOut'
            : 'animate__fadeIn'} animate__faster card-img-top img-fluid"
        on:mouseover={mouseOver}
        on:mouseout={mouseOut}
        src={handBagPerson}
        alt="hola"
        height="275"
    />
</div>
