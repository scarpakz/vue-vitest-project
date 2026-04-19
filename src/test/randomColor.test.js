import {test, expect} from 'vitest'
import {compRandomColor} from '@/composables/randomColor'

test('Must generate colors and check type', () => {
    const colors = ['teal', 'blue', 'coral', 'purple', 'pink', 'amber', 'green', 'gray']

    expect(colors).toContain(compRandomColor())
    expect(compRandomColor()).toEqual(expect.any(String))
    expect(compRandomColor().length).toBeGreaterThan(0) // check if exists
})