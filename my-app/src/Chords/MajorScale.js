const singleOct = [0,2,4,5,7,9,11];
const doubleOct = [...singleOct, ...singleOct.map(n=>n+12)];
const tripleOct = [...doubleOct, ...singleOct.map(n=>n+24)];
const fiveToFive = [...singleOct.map(n=>n-12).slice(4), ...singleOct, ...singleOct.map(n=>n+12).slice(0,5)]

module.exports = {
    singleOct: singleOct,
    doubleOct: doubleOct,
    tripleOct: tripleOct,
    fiveToFive: fiveToFive,
};