import { describe , it , expect } from 'vitest'
import { calculateResults } from './results.js'

describe('calculateResults' , () => {
    it('рахування точності і помилок' , () => {
        const result = calculateResults({
            text: 'hello',
            userInput: 'hello',
            startTime: 60,
            seconds: 50
        })

        expect(result.accuracy).toBe(100)
        expect(result.errors).toBe(0)
        expect(result.time).toBe(10)
    })

    it('рахує помилки при неправильному вводі' , () => {
        const result = calculateResults({
            text: 'hello',
            userInput: 'hullo',
            startTime: 60,
            seconds: 50
        })

        expect(result.errors).toBe(1)
        expect(result.accuracy).toBe(80)
    })

    it('рахує WPM більше нуля при наборі тексту' , () => {
        const result = calculateResults({
            text: 'hello world test',
            userInput: 'hello world test',
            startTime: 60,
            seconds: 30
        })

        expect(result.wpm).toBeGreaterThan(0)
    })
})