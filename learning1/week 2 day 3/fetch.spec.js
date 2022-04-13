global.fetch = require('jest-fetch-mock')

describe('getISS', () => {
    test('works', async () => {
        const json = await getISS()
        expect(fetch).toHaveBeenCalledWith('https://api.wheretheiss.at/v1/satellites/25544')
    })
})