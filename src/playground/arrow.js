const square = function(N) {
    return N*N;
};

const squareArrow = (X) => X*X;

const getFirstName = (FullName) =>
      FullName.split(' ')[0];

const multiplier = {
    numbers: [1,2,3,4,5],
    multiplyBy: [42],
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
