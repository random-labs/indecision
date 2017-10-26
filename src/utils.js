console.log('utils.js is running');

const square = (x) => x * x;

const add = (x, y) => x + y;

const subtract = (x,y) => x - y;

// this is NOT an object!
export {
    add,
    square,
    subtract as default
};
