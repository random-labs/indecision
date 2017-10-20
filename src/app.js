class IndecisionApp extends React.Component {
    constructor() {
        super();
        this.title =  'Indecisions, indecisions...';
        this.subtitle = 'Put your life in the hands of a computer';
        this.options = ['first', 'second', 'third'];
    }

    render() {
        return(
            <div>
              <Header title={this.title}/>
              <Action/>
              <AddOption/>
              <Options optionsList={this.options}/>
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
    handlePick() {
        console.log("pick clicked");
    }
    handleRemoveAll() {
        console.log("remove all clicked");
    }
    render() {
        return (
            <div>
              <button onClick={this.handlePick}>What should I do?</button>
              <button onClick={this.handleRemoveAll}>Remove all options</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
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
    onSubmit(e) {
        e.preventDefault();
        const option = e.target.optionText.value.trim();
        if (option) {
            console.log(`option ${option} was submitted`);
            e.target.optionText.value = '';
        }
        return;
    }
    render() {
        return (
            <div>
              <form onSubmit={this.onSubmit}>
                <input type="text" name="optionText"/>
                <button>Add option</button>
              </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('root'));
