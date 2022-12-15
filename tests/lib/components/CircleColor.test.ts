import { render, cleanup, screen } from '@testing-library/svelte'
import CircleColor from '$lib/components/CircleColor.svelte'

describe('Test of CircleColor component', () => {
    test('Should be black value by default', () => {
        render(CircleColor)
        expect(screen.queryAllByText(/black/i)).toBeInTheDocument
    })

    test('Should be red value', () => {
        render(CircleColor, {color: "red"})
        expect(screen.queryAllByText(/red/i)).toBeInTheDocument
    })

    test('Path is defined', () => {
        render(CircleColor)
        expect(screen.queryAllByAltText("/")).toBeInTheDocument
    })
})