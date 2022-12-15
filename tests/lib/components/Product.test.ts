import { render, cleanup, screen } from '@testing-library/svelte'
import Product from '$lib/components/Product.svelte'

describe('First', () => {

    afterEach(() => {
        cleanup()
    }) // Default on import: runs it after each test.

    test('Should have the price 200', async () => {
        render(Product, { price: 200 })
        expect(screen.getByText("200 $")).toBeInTheDocument()

    })

    test('should have the price empty', () => {
        render(Product)
        expect(screen.getByText("$")).toBeInTheDocument()
    })

    test('should sum', () => { expect(2 + 2).toBe(4) })

})