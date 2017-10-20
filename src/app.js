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
    render() {
        return (
            <div>
              <button>What should I do?</button>
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
    render() {
        return (
            <div>
              <p>A form for adding an option will live here</p>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('root'));
