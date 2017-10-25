
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: props.options
        };
    }

    handleRemoveAll() {
        this.setState(() => ({ options:[] }));
    }

    removeOne(optionToRemove) {
        this.setState((oldState) => ({
            options:oldState.options.filter((option) =>
                                            optionToRemove !== option)
        })); 
    }

    handleMakeDecision() {
        const rand = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[rand]);
    }
    handleAddOption(newOpt) {
        if (!newOpt) {
            return "Enter something, buddy!";
        } else if (this.state.options.indexOf(newOpt) > -1) {
            return "Enter something new, buddy!";
        }
        this.setState((oldState) => (
            {options: oldState.options.concat(newOpt)}
        ));
    }

    render() {
        return(
            <div>
              <Header />
              <Action
                hasOptions={this.state.options.length > 0}
                makeDecision={this.handleMakeDecision.bind(this)}
                />
              <AddOption addOptionHandler={this.handleAddOption.bind(this)} />
              <Options
                removeOne={this.removeOne.bind(this)}
                removeAllHandler={this.handleRemoveAll.bind(this)}
                optionsList={this.state.options}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
);

Header.defaultProps = {
    title: 'Indecision App'
};

const Action = (props) => (
        <div>
          <button
            onClick={props.makeDecision}
            disabled={!props.hasOptions}
            >
            What should I do?
          </button>
        </div>
);

const Options = (props) => (
    <div>
      <button onClick={props.removeAllHandler}>Remove All</button>
      <ol>
        {props.optionsList.map((o) =>
                               <Option
                                     key={o}
                                     optionText={o}
                                     removeOne={props.removeOne}
                                 />)}
    </ol>
        </div>
);

const Option = (props) => (
    <div>
      <li>{props.optionText}</li>
      <button
        onClick={(e) => {
            props.removeOne(props.optionText);
        }}>
        remove
      </button>
    </div>
);

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            error: undefined
        };
    }
    onSubmit(e) {
        e.preventDefault();
        const option = e.target.optionText.value.trim();
        console.log(`passing ${option} to the handler upstairs`);
        const error = this.props.addOptionHandler(option);
        this.setState(() => ({error}));
        e.target.optionText.value = '';
    }
    render() {
        return (
            <div>
              <p>{this.state.error}</p>
              <form onSubmit={this.onSubmit}>
                <input type="text" name="optionText"/>
                <button>Add option</button>
              </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp options={['sleep', 'eat']}/>, document.getElementById('root'));
