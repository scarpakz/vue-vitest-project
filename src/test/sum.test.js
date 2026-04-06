import {expect, test} from 'vitest'
import { sumOfTwoNumbers } from '@/composables/sum'

test('Add two numbers',() => {
    expect(sumOfTwoNumbers(1,2)).toBe(3)
})