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

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    console.log(randomNum);
    const option = app.options[option];
};

const renderFunc = () => {
    const template = (
	<div>
	  <h1>{app.title}</h1>
	  <h2>{app.subtitle ? "Subtitle: " + app.subtitle : "none"}</h2>
          <ol>
            {app.options.length > 0 ? app.options.map((o) => <li key={o}>{o}</li>): "no options"}
        </ol>

            <button disabled={app.options.length == 0} name='makeDecision' onClick={makeDecision}>Make Decision</button><br/>
            <button name='reset' onClick={reset} >Reset options</button>
            <form onSubmit={onFormSubmit}>
            <input type="text" name="optionText"/>
            <button>add option</button>
            </form>
            </div>
    );

    ReactDOM.render(template, appRoot);
 };

const reset = () => {
    app.options = [];
    renderFunc();
}

renderFunc();
