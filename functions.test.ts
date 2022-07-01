const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('return an array with the same objects in it', () => (
        expect(shuffleArray()).toEqual(
            expect.arrayContaining([
                expect.objectContaining({id: 1}),
                expect.objectContaining({id: 2}),
                expect.objectContaining({id: 3}),
                expect.objectContaining({id: 4}),
                expect.objectContaining({id: 5}),
                expect.objectContaining({id: 6}),
                expect.objectContaining({id: 7}),
                expect.objectContaining({id: 8}),
                expect.objectContaining({id: 9}),
            ])
        )
    ))
    test('returns an array with the same length', () => (
        expect(shuffleArray()).toHaveLength(8)
    ))
})