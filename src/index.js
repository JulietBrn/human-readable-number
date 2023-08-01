module.exports = function toReadable (number) {
    let resultArray = []
    const hundred = Math.trunc(number / 100)
    const decade = Math.trunc((number-hundred*100)/10)
    const unit = number - hundred*100 - decade*10
    let hundredL = '',
        decadeL = '',
        unitL = ''
    const numbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }
    if (hundred > 0) {
        hundredL = `${numbers[hundred]} hundred`
        resultArray.push(hundredL)
    }
    if (decade > 1) {
        decadeL = `${numbers[decade*10]}`
        unitL = `${numbers[unit]}`
    } else if (decade === 1 ) {
        decadeL = `${numbers[number%100]}`

    } else if (decade === 0 && unit !=0) {
        unitL = `${numbers[unit]}`
    }
    if(decade) {resultArray.push(decadeL)}
    if(unit) {resultArray.push(unitL)}
    return (number === 0) ? `${numbers[unit]}` : resultArray.join(' ').trim()
}
