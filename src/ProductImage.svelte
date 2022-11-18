<script>
    import "animate.css";
    export let handBag = "./src/img/handbag/handbag-1.jpg";
    export let handBagPerson = "./src/img/handbag/handbag-1-person.jpg";
    let isOutOfContainer = true;

    const mouseOver = () => {
        console.log("Enter in the image");
        isOutOfContainer = false;
    };
    const mouseOut = () => {
        console.log("Out image");
        isOutOfContainer = true;
    };
</script>

<div>
    {#if isOutOfContainer}
        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        <img
            class="animate__animated animate__fadeIn card-img-top img-fluid"
            on:mouseover={mouseOver}
            on:mouseout={mouseOut}
            src={handBag}
            alt="hola"
            height="275"
        />
    {:else}
        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        <img
            class="animate__animated animate__fadeIn card-img-top img-fluid"
            on:mouseover={mouseOver}
            on:mouseout={mouseOut}
            src={handBagPerson}
            alt="hola"
            height="300"
        />
    {/if}
</div>
