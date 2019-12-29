const sumOfSquares = (a, b, c) => {
    const min = Math.min(a, b, c);
    return (a * a) + (b * b) + (c * c) - (min * min);
};

const goodEnough = (number, guess) => {
    return Math.abs((guess * guess * guess) - number) < 0.001;
}

const improve = (number, guess) => {
    const firstTerm = number / (guess * guess);
    const secondTerm = 2 * guess;
    const value = (firstTerm + secondTerm) / 3;
    return value;
}

const newtonCubeRoot = (number, guess) => {
    return goodEnough(number, guess) ? guess : newtonCubeRoot(number, improve(number, guess));
}

module.exports = { sumOfSquares, newtonCubeRoot  };