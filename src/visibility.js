var appRoot = document.getElementById('root');

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        console.log("In the constructor");
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visible: false
        }
    }
    handleToggle() {
        console.log("Toggle handler");
        this.setState((oldState) => {
            return {
                visible: !oldState.visible
            }
        })
    }
    render() {
        return (
                <div>
                <button onClick={this.handleToggle}>{this.state.visible ? 'Hide Details' : 'Show Details'}</button>
                <h2>{this.state.visible? "Some hidden details" : null}</h2>
                </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('root'));
