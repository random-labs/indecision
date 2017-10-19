"use strict";

console.log("app.js is running");

// JSX - JavaScript XML

var app = {
    title: "A Title!",
    subtitle: "some subtitle",
    options: []
};

var appRoot = document.getElementById('root');

const foo = () => "foo";

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.optionText.value;
    if (option) {
        console.log("Option", option, "submitted");
        app.options.push(option);
        e.target.optionText.value='';
        renderFunc();
    }
};
      
const renderFunc = () => {
    const template = (
	<div>
	  <h1>{app.title}</h1>
	  <h2>{app.subtitle ? "Subtitle: " + app.subtitle : "none"}</h2>
	  <h2>{app.options.length > 0 ? app.options.join(' ') : 'no options'}</h2>
          <button name='reset' onClick={reset} >Reset options</button>
          <form onSubmit={onFormSubmit}>
            <input type="text" name="optionText"/>
            <button>add option</button>
          </form>
        </div>
    );

    ReactDOM.render(template, appRoot)
 };

const reset = () => {
    app.options = [];
    renderFunc();
}

renderFunc();
