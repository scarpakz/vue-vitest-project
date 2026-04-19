import {expect, test, describe} from "vitest";
import {getCountries} from '@/api/api'

describe('This test the countries API data', () => {
    test('Must return list of countries', async () => {
        const response = await getCountries()
        const data = response

        expect(data.length).toBeGreaterThan(0)
        expect(data).toBeInstanceOf(Object)
    })
    
    test('Must return required object keys, with name, capital, currencies', async () => {
        const response = await getCountries()
        const data = response
    
        expect(data[0]).toMatchObject({
            name: {
                common: expect.any(String),
                official: expect.any(String),
                nativeName: expect.any(Object)
            },
            capital: expect.any(Array),
            currencies: expect.any(Object)
        })
    })

    test('Must return 250 total currencies', async () => {
        const response = await getCountries()
        const data = response
        const TOTAL_NUMBER_OF_CURRENCIES = 250

        const filterCurrencies = data.map(item => item.currencies)
        expect(filterCurrencies.length).toBe(TOTAL_NUMBER_OF_CURRENCIES)
    })
})
