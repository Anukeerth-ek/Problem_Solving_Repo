import { calculateFactorial } from "../problems/factorial";

describe('calculating factorials of a number', ()=> {
    test('checking with 2 digit number', ()=> {
        expect(calculateFactorial(10)).toBe(3,628,800)
    })
})