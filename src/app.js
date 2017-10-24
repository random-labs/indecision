
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ['first-o', 'second-o', 'third-o-o']
        };
        this.title =  'Indecisions, indecisions...';
        this.subtitle = 'Put your life in the hands of a computer';
    }
    handleRemoveAll() {
        this.setState(() => {
            return {
                options:[]
            }})
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
        this.setState((oldState) => {
            return {
                options: oldState.options.concat(newOpt)
            }})
    }

    render() {
        return(
            <div>
              <Header title={this.title}/>
              <Action
                hasOptions={this.state.options.length > 0}
                makeDecision={this.handleMakeDecision.bind(this)}
                />
              <AddOption addOptionHandler={this.handleAddOption.bind(this)} />
              <Options
                removeAllHandler={this.handleRemoveAll.bind(this)}
                optionsList={this.state.options}/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
              <h1>{this.props.title}</h1>
              <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
              <button
                onClick={this.props.makeDecision}
                disabled={!this.props.hasOptions}
                >
                What should I do?
              </button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
              <button onClick={this.props.removeAllHandler}>Remove All</button>
              <ol>
                {this.props.optionsList.map((o) =>
                <Option key={o} optionText={o}/>)}
            </ol>
                </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
              <li>{this.props.optionText}</li>
            </div>
        );
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            error: undefined
        }
    }
    onSubmit(e) {
        e.preventDefault();
        const option = e.target.optionText.value.trim();
        console.log(`passing ${option} to the handler upstairs`);
        const error = this.props.addOptionHandler(option);
        this.setState(() => {
            return {error}
        });
        e.target.optionText.value = '';
        
        return;
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

ReactDOM.render(<IndecisionApp/>, document.getElementById('root'));
