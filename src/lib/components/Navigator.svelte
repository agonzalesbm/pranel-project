<script>
  // @ts-nocheck

  import "bootswatch/dist/lux/bootstrap.min.css";
  import { isInProduct, clickBags, clickJewelry, clickShoes } from "../services/store";

  import iconShoes from "$lib/img/icons/tacones-altos.svg";
  import iconBag from "$lib/img/icons/bag.svg";
  import iconDiamod from "$lib/img/icons/joya.svg";
  import { sortedByAscendingOrder, sortedByDescendingOrder } from "$lib/services/sorted";

  import "bootswatch/dist/lux/bootstrap.min.css";
  import { currentPage, isSortByAscending, isSortByDescending } from "../services/store";
  import RowColors from "./RowColors.svelte";
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";

  let checkShoes = false;
  let checkBags = false;
  let checkJewelry = false;
  let path = "/";
  let isCheck = "";
  let isHere = false;

  $: isCheck;
  $: if (isHere) isCheck = "";
  isInProduct.subscribe((value) => (isHere = value));

  if (browser) {
    let current = window.localStorage.getItem("current");
    let positions = JSON.parse(current);
    clickShoes.update((value) => (value = false));
    clickBags.update((value) => (value = false));
    clickJewelry.update((value) => (value = false));
    if (positions.bags) {
      clickBags.update((value) => (value = true));
    } else if (positions.shoes) {
      clickShoes.update((value) => (value = true));
    } else if (positions.jewelry) {
      clickJewelry.update((value) => (value = true));
    }
  }

  clickBags.subscribe((value) => {
    checkBags = value;
  });
  clickShoes.subscribe((value) => {
    checkShoes = value;
  });
  clickJewelry.subscribe((value) => {
    checkJewelry = value;
  });

  export function shoesMarked() {
    isCheck = "";
    clickShoes.update((value) => (value = true));
    clickBags.update((value) => (value = false));
    clickJewelry.update((value) => (value = false));
    let positions = {
      bags: false,
      shoes: true,
      jewelry: false,
    };
    window.localStorage.setItem("current", JSON.stringify(positions));
    path = "/shoes";
  }

  export function bagsMarked() {
    isCheck = "";
    clickShoes.update((value) => (value = false));
    clickBags.update((value) => (value = true));
    clickJewelry.update((value) => (value = false));
    let positions = {
      bags: true,
      shoes: false,
      jewelry: false,
    };
    path = "/bags";
    window.localStorage.setItem("current", JSON.stringify(positions));
  }

  export function jewelryMarked() {
    isCheck = "";
    clickShoes.update((value) => (value = false));
    clickBags.update((value) => (value = false));
    clickJewelry.update((value) => (value = true));
    let positions = {
      bags: false,
      shoes: false,
      jewelry: true,
    };
    path = "/jewelry";
    window.localStorage.setItem("current", JSON.stringify(positions));
  }

  isInProduct.subscribe((value) => (isHere = value));
  currentPage.subscribe((value) => {
    path = value;
  });

  const changePath = () => {
    if (browser) {
      let current = window.localStorage.getItem("current");
      let positions = JSON.parse(current);
      if (positions.bags) {
        path = "/bags";
      } else if (positions.shoes) {
        path = "/shoes";
      } else if (positions.jewelry) {
        path = "/jewelry";
      }
    }
  };

  $: path;
  $: changePath();

  const orderByAscending = () => {
    isSortByAscending.update((value) => (value = true));
    isSortByDescending.update((value) => (value = false));
    sortedByAscendingOrder();
  };

  const orderByDescending = () => {
    isSortByDescending.update((value) => (value = true));
    isSortByAscending.update((value) => (value = false));
    sortedByDescendingOrder();
  };
</script>

<nav class="container-fluid">
  <nav class="navbar bg-light">
    <div class="container-fluid">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/shoes" on:click={shoesMarked}>
            {#if checkShoes}
              <u
                ><img src={iconShoes} alt="" class="icon" />
                Shoes</u>
            {:else}
              <p class="color-disabled">
                <img src={iconShoes} alt="" class="icon" /> Shoes
              </p>
            {/if}
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/bags" on:click={bagsMarked}>
            {#if checkBags}
              <u> <img src={iconBag} alt="" class="icon" /> Bags</u>
            {:else}
              <p class="color-disabled">
                <img src={iconBag} alt="" class="icon" /> Bags
              </p>
            {/if}
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/jewelry" on:click={jewelryMarked}>
            {#if checkJewelry}
              <u> <img src={iconDiamod} alt="" class="icon" /> Jewelry</u>
            {:else}
              <p class="color-disabled">
                <img src={iconDiamod} alt="" class="icon" /> Jewelry
              </p>
            {/if}
          </a>
        </li>
      </ul>
      <form class="d-flex" class:visually-hidden={isHere}>
        <button
          type="button"
          class="btn-filter btn btn-primary"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="23"
            fill="currentColor"
            class="bi bi-sliders"
            viewBox="0 2 19 19">
            <path
              fill-rule="evenodd"
              d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z" />
          </svg>
          Filter
        </button>
      </form>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <h4 id="offcanvasRightLabel ">Filter by</h4>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close" />
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="offcanvas-body">
          <label class="form-check-label">Order by Price</label> <br /> <br />
          <div class="form-check form-check-inline">
            <input
              bind:group={isCheck}
              on:click={orderByAscending}
              class="form-check-input"
              type="radio"
              id="inlineCheckbox2"
              value="option1"
              name="check" />
            <label on:click={orderByAscending} class="form-check-label" for="inlineCheckbox2">
              Ascending
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              bind:group={isCheck}
              on:click={orderByDescending}
              class="form-check-input"
              type="radio"
              id="inlineCheckbox3"
              value="option2"
              name="check 2" />
            <label on:click={orderByDescending} class="form-check-label" for="inlineCheckbox3">
              Descending
            </label>
          </div>
          <hr />
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="form-check-label">Colors</label>
          <RowColors
            firstColor="blue"
            secondColor="green"
            thirdColor="black"
            forthColor="gray"
            fifthColor="white" />
          <RowColors
            firstColor="gold"
            secondColor="brown"
            thirdColor="yellow"
            forthColor="red"
            fifthColor="pink" />
          <div class="container mt-4">
            <a data-sveltekit-reload href={path}>
              <div class="row">
                <button class="btn btn-outline-dark">clean the filter</button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</nav>

<style>
  nav {
    height: 5em;
    padding: 1em;
    margin-top: -0.5em;
  }

  .nav-item {
    font-size: medium;
  }

  h4 {
    margin: 0.5em;
    margin-bottom: 0;
  }
  .btn-filter {
    background: #ffded7;
    background-image: -webkit-linear-gradient(top, #ffded7, #ffded7);
    background-image: -moz-linear-gradient(top, #ffded7, #ffded7);
    background-image: -ms-linear-gradient(top, #ffded7, #ffded7);
    background-image: -o-linear-gradient(top, #ffded7, #ffded7);
    background-image: linear-gradient(to bottom, #ffded7, #ffded7);
    -webkit-border-radius: 27;
    -moz-border-radius: 27;
    border-radius: 27px;
    color: black;
    font-size: 20px;
    padding: 0.5em 1em;
    text-decoration: none;
    margin-top: -0.5em;
  }

  .btn-filter:hover {
    background: #000000;
    text-decoration: none;
    color: white;
  }

  .color-disabled {
    opacity: 0.4;
  }

  .color-disabled:hover {
    opacity: 1;
  }

  .icon {
    height: 1.5em;
    position: relative;
    transform: scaleX(-1);
    margin: 0em 0.5em;
    visibility: visible;
  }

  @media screen and (max-width: 750px) {
    .icon {
      height: 2em;
    }

    .nav-item {
      font-size: small;
      margin: 0.2em;
      visibility: hidden;
      margin-left: -3em;
    }

    .btn-filter {
      font-size: 10px;
      padding: 0.3em 0.7em;
      margin-top: -1em;
    }
  }

  a {
    text-decoration: none;
  }
</style>
