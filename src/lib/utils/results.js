export function calculateResults({ text , userInput , startTime , seconds }) {
    const timeSpent = startTime - seconds
    const minutes = timeSpent / 60 || 1 / 60

    let correct = 0
    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] === text[i]) correct++
    }

    const errors = userInput.length - correct
    const accuracy = userInput.length > 0 ? Math.round((correct / userInput.length) * 100) : 0
    const wpm = Math.round((correct / 5) / minutes)

    return {
        wpm , accuracy ,errors , time: timeSpent
    }
}