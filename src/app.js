import './utils.js';
import subtract, {
    square, add
} from './utils.js';

console.log('app.js is running too!');
console.log(square(5));
console.log(add(11,22));
console.log("Subtract: ", subtract(10,5));

const foo = () => {
    console.log("foo");
};

console.log(foo());
