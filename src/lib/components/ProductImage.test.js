import { render, cleanup } from '@testing-library/svelte'
import { afterEach, describe, test } from 'vitest'
import ProductImage from './ProductImage.svelte'


describe('First', () => {

    afterEach(() => {
        cleanup()
    }) // Default on import: runs it after each test.

    test('should First test', () => {
        const { container, component } = render(ProductImage)
        console.log(container)
        console.log(component)

    })

})