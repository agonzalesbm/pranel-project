import { tick } from 'svelte'
import { clickBagsButton } from "$lib/services/clickStates";
import { clickBags } from "$lib/services/store";
import { afterEach, describe, expect, it, test } from "vitest";

describe('States between current page', () => {
    /**
     * @type {HTMLElement}
     */
    let host
    afterEach(() => {
        host.remove()
    })
    test('Should be true', async () => {
        clickBagsButton()
        let valueExpect = false
        clickBags.subscribe(value => valueExpect = value)
        expect(valueExpect).toBeTruthy()
    })
})