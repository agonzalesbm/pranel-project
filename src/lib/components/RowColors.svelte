<script>
    // @ts-nocheck

    import { goto } from "$app/navigation";
    import { currentPage } from "$lib/services/store";

    export let firstColor = "black";
    export let secondColor = "black";
    export let thirdColor = "black";
    export let forthColor = "black";
    export let fifthColor = "black";

    let path = "/";
    currentPage.subscribe((value) => (path = value));
</script>

<div class="colors">
    <label class="color-box">
        <input type="checkbox" name="" id="" />
        <a data-sveltekit-reload href={`${path}?color=${firstColor}`}>
            <div style="background-color: {firstColor};" />
        </a>
    </label>
    <label class="color-box">
        <input type="checkbox" name="" id="" />
        <a data-sveltekit-reload href={`${path}?color=${secondColor}`}>
            <div style="background-color: {secondColor};" />
        </a>
    </label>
    <label class="color-box">
        <input type="checkbox" name="" id="" />
        <a data-sveltekit-reload href={`${path}?color=${thirdColor}`}>
        <div style="background-color: {thirdColor};" />
        </a>
    </label>
    <label class="color-box">
        <input type="checkbox" name="" id="" />
        <a data-sveltekit-reload href={`${path}?color=${forthColor}`}>
        <div style="background-color: {forthColor};" />
        </a>
    </label>
    <label class="color-box">
        <input type="checkbox" name="" id="" />
        <a data-sveltekit-reload href={`${path}?color=${fifthColor}`}>
        <div style="background-color: {fifthColor};" />
        </a>
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
