<script>
    import { existColor } from "$lib/services/store";

    export let path = "/";
    export let color = "black";

    let currentColor = "";
    existColor.subscribe((value) => (currentColor = value));
</script>

<label class="color-box">
    <input type="checkbox" name="" id="" />
    <a data-sveltekit-reload href={`${path}?color=${color}`}>
        <div
            class={currentColor === color ? "border border-5" : ""}
            style="background-color: {color};"
        />
    </a>
</label>

<style>
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
