import React from 'react';
import './App.css';
import logo from './logo-resource-w.svg';

const WhichBrowser = require('which-browser');
const result = new WhichBrowser(navigator.userAgent);

class ShowWindowDimensions extends React.Component {
    state = {width: window.innerWidth, height: window.innerHeight};

    render() {
        return <span>{result.browser.name}'s viewport is {this.state.width}px width x {this.state.height}px height</span>;
    }

    updateDimensions = () => {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }
}

function App() {
    return (
        <div className="App">
            <div className="content">
                <a className="logoLink" href={"https://resourceatlanta.com"}>
                    <img src={logo} className="logo" alt="Resource Branding"/>
                </a>
                <div className="browser">
                    You are using {result.browser.name} version {result.browser.version.value}
                </div>
                <div className="os">on your {result.device.manufacturer} {result.device.model} {result.device.type}
                </div>
                <div className="os">
                    running {result.os.name}.
                </div>
                <div className="os" style={{marginTop: '1rem'}}>
                    <ShowWindowDimensions/>
                </div>
            </div>
        </div>
    );
}

export default App;
