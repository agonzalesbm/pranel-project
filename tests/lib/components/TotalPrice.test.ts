import { render, cleanup, screen } from '@testing-library/svelte'
import TotalPrice from '$lib/components/TotalPrice.svelte'

describe('Total price component test', () => {
    test('Should return 0', () => {
        render(TotalPrice)
        expect(screen.getByText(/0/)).toBeDefined
    })

    test('Should return 300', () => {
        render(TotalPrice, {totalPrice: 300})
        expect(screen.getByText(/300/)).toBeInTheDocument
    })
})