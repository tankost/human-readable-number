module.exports = function toReadable (number) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
    'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number === 0) {
        return 'zero';
    } else if (number < 20) {
        return units[number];
    } else if (number < 100) {
        return `${tens[number.toString().charAt(0)]} ${units[number.toString().charAt(1)]}`.trim();
    } else if (number < 1000 && number % 100 !== 0) {
        return `${toReadable(number.toString().charAt(0))} hundred ${toReadable(number % 100)}`.trim();
    } else if (number < 1000 && number % 100 === 0) {
        return `${toReadable(number.toString().charAt(0))} hundred`;
    }
}
