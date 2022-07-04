const { shuffleArray } = require('./utils')

const arr1 = [1,2,3,4,]
const arr2 = []
const arr3 = [45,64,1,35,5]

describe('shuffleArray should', () => {
    test('return an array', () => {
        expect(Array.isArray(shuffleArray(arr1))).toBe(true)
        expect(Array.isArray(shuffleArray(arr2))).toBe(true)
        expect(Array.isArray(shuffleArray(arr3))).toBe(true)
    })

    test('have its output array have the same length as its input array', () => {
        expect(shuffleArray(arr1).length).toBe(arr1.length)
        expect(shuffleArray(arr2).length).toBe(arr2.length)
        expect(shuffleArray(arr3).length).toBe(arr3.length)
    })
})

//these test didnt work, wanted to go over them to see where i went wrong
//After going over the assessment in class i think i have an idea of what i did wrong but wanted clarification
//I'm pretty sure my first mistake was testing the function shufflArray as an array and not a function
//The other seems to be improper syntax on the expect
// describe('shuffleArray should', () => {
//     test('return an array with the same objects in it', () => (
//         expect(shuffleArray()).toEqual(
//             expect.arrayContaining([
//                 expect.objectContaining({id: 1}),
//                 expect.objectContaining({id: 2}),
//                 expect.objectContaining({id: 3}),
//                 expect.objectContaining({id: 4}),
//                 expect.objectContaining({id: 5}),
//                 expect.objectContaining({id: 6}),
//                 expect.objectContaining({id: 7}),
//                 expect.objectContaining({id: 8}),
//                 expect.objectContaining({id: 9}),
//             ])
//         )
//     ))
//     test('returns an array with the same length', () => (
//         expect(shuffleArray()).toHaveLength(8)
//     ))
// })