<script>
    import "animate.css";
    let handBag = "./src/img/handbag/handbag-1.jpg";
    let handBagPerson = "./src/img/handbag/handbag-1-person.jpg";
    let isOutOfContainer = false;

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
            class="animate__animated animate__fadeIn"
            on:mouseover={mouseOver}
            on:mouseout={mouseOut}
            src={handBag}
            alt="hola"
        />
    {:else}
        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        <img
            class="animate__animated animate__fadeIn"
            on:mouseover={mouseOver}
            on:mouseout={mouseOut}
            src={handBagPerson}
            alt="hola"
        />
    {/if}
</div>
