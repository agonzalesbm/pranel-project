import { browser } from "$app/environment";
import { clickBags, clickJewelry, clickShoes } from "./store";

export const clickBagsButton = () => {
    let positions = {
        bags: true,
        shoes: false,
        jewelry: false,
    };
    if (browser) {
        window.localStorage.setItem("current", JSON.stringify(positions));
    }
    clickBags.update((value) => (value = true));
    clickShoes.update((value) => (value = false));
    clickJewelry.update((value) => (value = false));
}

export const clickJewelryButton = () => {
    let positions = {
        bags: false,
        shoes: false,
        jewelry: true,
    };
    if (browser) {
        window.localStorage.setItem("current", JSON.stringify(positions));
    }
    clickBags.update((value) => (value = false));
    clickShoes.update((value) => (value = false));
    clickJewelry.update((value) => (value = true));
}

export const clickShoesButton = () => {
    let positions = {
        bags: false,
        shoes: true,
        jewelry: false,
    };
    if (browser) {
        window.localStorage.setItem("current", JSON.stringify(positions));
    }
    clickBags.update((value) => (value = false));
    clickShoes.update((value) => (value = true));
    clickJewelry.update((value) => (value = false));
}