import { Component } from "react";

class Header extends Component {
    render() {
        return <header className="App-header">
            <img src="https://placehold.it/300/ff0000/ffffff" className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>;
    }
};

export default Header;