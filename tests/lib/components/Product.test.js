import { render, cleanup, screen } from '@testing-library/svelte'
// @ts-ignore
import Product from '../../../src/lib/components/Product.svelte'


describe('First', () => {

    afterEach(() => {
        cleanup()
    }) // Default on import: runs it after each test.

    test('Should have animate fade in by default', async () => {
        render(Product)
        screen.findByText('View in the cart')
    })

})