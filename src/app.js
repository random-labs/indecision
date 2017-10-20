class Header extends React.Component {
    render() {
        return (
            <div>
              <h1>Indecision</h1>
              <h2>Put your life in the hands of a computer</h2>
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
              <p>This is going to be a list of Options</p>
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

const jsx = (
    <div>
      <Header/>
      <Action/>
      <AddOption/>
      <Options/>
    </div>
);

ReactDOM.render(jsx, document.getElementById('root'));
