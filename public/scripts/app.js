"use strict";

console.log("app.js is running");

var template = React.createElement(
  "h1",
  null,
  "Indecision App - JSX!"
);

var appRoot = document.getElementById('root');

console.log(appRoot);

ReactDOM.render(template, appRoot);
