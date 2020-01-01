const { sumOfSquares, newtonCubeRoot, computeFunc, computeFuncIter } = require("./chapter-1");

describe("Chapter 1", () => {
  let actual;
  let expected;
  describe("1.3", () => {
    test("it returns 13 for 1,2,3", () => {
      expected = 13;
      actual = sumOfSquares(1, 2, 3);
      expect(actual).toEqual(expected);
    });

    test("it returns 13 for 7,2,5", () => {
      expected = 74; 
      actual = sumOfSquares(7, 2, 5);
      expect(actual).toEqual(expected);
    });

    test("it returns 52 for 6,4,1", () => {
      expected = 52;
      actual = sumOfSquares(6, 4, 1);
      expect(actual).toEqual(expected);
    });
  });

  describe("1.8", () => {
    test("It returns 3 for 27", () => {
      expected = 3;
      actual = parseInt(newtonCubeRoot(27, 5));
      expect(actual).toEqual(expected);
    });

    test("It returns 8 for 512", () => {
      expected = 8;
      actual = parseInt(newtonCubeRoot(512, 3));
      expect(actual).toEqual(expected);
    });

    test("It returns 6.35 for 256", () => {
      expected = 6.35;
      actual = Number(parseFloat(newtonCubeRoot(256, 3), 2).toFixed(2));
      expect(actual).toEqual(expected);
    });
  });

  describe("1.11-a", () => {
    test("It returns 0 for 0", () => {
      expected = 0;
      actual = computeFunc(0);
      expect(actual).toEqual(expected);
    });

    test("It returns 4 for 3", () => {
      expected = 4;
      actual = computeFunc(3);
      expect(actual).toEqual(expected);
    });
  });

  describe("1.11-b", () => {
    test("It returns 0 for 0", () => {
      expected = 0;
      actual = computeFuncIter(0);
      expect(actual).toEqual(expected);
    });

    test("It returns 4 for 3", () => {
      expected = 4;
      actual = computeFuncIter(3);
      expect(actual).toEqual(expected);
    });
  });
});