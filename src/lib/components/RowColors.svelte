<script>
  // @ts-nocheck

  import { currentPage } from "$lib/services/store";
  import CircleColor from "./CircleColor.svelte";

  export let firstColor = "black";
  export let secondColor = "black";
  export let thirdColor = "black";
  export let forthColor = "black";
  export let fifthColor = "black";

  let path = "/";
  currentPage.subscribe((value) => (path = value));
</script>

<div class="colors">
  <CircleColor {path} color={firstColor} />
  <CircleColor {path} color={secondColor} />
  <CircleColor {path} color={thirdColor} />
  <CircleColor {path} color={forthColor} />
  <CircleColor {path} color={fifthColor} />
</div>

<style>
  .colors {
    width: 100%;
    height: auto;
    display: flex;
    padding-left: 0.5em;
  }
</style>
