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


const computeFunc = value => {
    if(value < 3) return value;
    else return computeFunc(value - 1) + 2 * computeFunc( value - 2) + 3 *  computeFunc(value - 3);
};

const computeFuncIter = value => {
    const answerSum = [0,1,2];
    for(let index = 3; index <= value; ++index) {
        answerSum.push(answerSum[index - 1] + 2 * answerSum[index - 2] + 3 * answerSum[index - 3]);
    }
    return answerSum[value];
}

const oddExp = (base, number) => {
    let value = 1;
    while(number > 0) {
        value *= base;
        number--;
    }
    return value;
}

const evenExp = (base, number) => {
    const steps = number / 2;
    let value = 1;
    for(let i = 0; i < steps;++i) {
        value *= base * base;
    }

    return value;
}

const fastExp = (base, number) => {
    return number % 2 === 0 ? evenExp(base, number) : oddExp(base, number);   
}


module.exports = { sumOfSquares, newtonCubeRoot, computeFunc, computeFuncIter, fastExp  };