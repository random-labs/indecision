import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldS {
  constructor() {
    this.name = "Alex";
  }
}
const oldS = new OldS();
console.log(oldS);

// ---------

class NewS {
  name = "Jen";
}

const newS = new NewS();

console.log(newS);