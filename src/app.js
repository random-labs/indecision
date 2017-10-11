"use strict";

console.log("app.js is running");

// JSX - JavaScript XML
var template = <h1>This is a JSX template in src/app.js - very cool</h1>;

var appRoot = document.getElementById('root');

console.log(appRoot);

ReactDOM.render(template, appRoot);
