import { render, cleanup, screen } from '@testing-library/svelte'
// @ts-ignore
import ProductImage from '../../../src/lib/components/ProductImage.svelte'


describe('First', () => {

    afterEach(() => {
        cleanup()
    }) // Default on import: runs it after each test.

    test('Should have animate fade in by default', async () => {
        render(ProductImage, { handBag: '.jpg' })
        screen.getByAltText('.jpg')
    })

})