<script>
    export let firstColor = 'black'
    export let secondColor = 'black'
    export let thirdColor = 'black'
    export let forthColor = 'black'
    export let fifthColor = 'black'
</script>

<div class="colors">
    <label class="color-box">
        <input
            type="checkbox"
            on:click={() => console.log("blue")}
            name=""
            id=""
        />
        <div style="background-color: {firstColor};" />
    </label>
    <label class="color-box">
        <input type="checkbox" name="" id="" />
        <div style="background-color: {secondColor};" />
    </label>
    <label class="color-box">
        <input type="checkbox" name="" id="" />
        <div style="background-color: {thirdColor};" />
    </label>
    <label class="color-box">
        <input type="checkbox" name="" id="" />
        <div style="background-color: {forthColor};" />
    </label>
    <label class="color-box">
        <input type="checkbox" name="" id="" />
        <div style="background-color: {fifthColor};" />
    </label>
</div>

<style>
    .colors {
        width: 100%;
        height: auto;
        display: flex;
        padding-left: 0.5em;
    }

    .color-box div {
        width: 4em;
        height: 4em;
        background-color: white;
        margin: 0.5em;
        border-radius: 50%;
        box-shadow: 0px 0px 0.5em #c7b0ab;
    }

    .color-box div:hover {
        box-shadow: inset 0px 0px 0.3em rgba(0, 0, 0, 0.43);
    }

    .color-box input {
        display: none;
    }
    .color-box input:checked + div {
        border: solid 0.3em #000000;
        box-shadow: 0px 0px 0.6em rgba(0, 0, 0, 0.9);
    }
</style>
