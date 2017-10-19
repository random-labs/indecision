"use strict";

var appRoot = document.getElementById('root');

let hidden = true;

const toggle = () => {
    hidden = !hidden;
    title = hidden? 'Show Details' : 'Hide Details';
    renderMe();
};

let title = "Show Details";

const details = "Fine Details";

const renderMe = () => {
    const template = (
        <div>
            <h1>Visibility Toggle App</h1>
            <h2> Hidden? - {hidden? 'true' : 'false'}</h2>
            <button name='toggle_btn' onClick={toggle}>{title}</button>
            <h3>{hidden? null : details }</h3>
            </div>
    );

    ReactDOM.render(template, appRoot);
};

renderMe();
