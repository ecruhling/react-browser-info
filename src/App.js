import React from 'react';
import styles from './App.module.css';
import logo from './logo-resource-w.svg';

const WhichBrowser = require('which-browser');
const result = new WhichBrowser(navigator.userAgent);

class ShowWindowDimensions extends React.Component {
    state = { width: window.innerWidth, height: window.innerHeight };
    render() {
        return <span>{result.browser.name}'s viewport is {this.state.width}px width x {this.state.height}px height</span>;
    }
    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
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
        <div className={styles.App}>
            <div className={styles.content}>
                <a className={styles.logoLink} href={"https://resourceatlanta.com"}><img className={styles.logo}
                                                                                         src={logo}
                                                                                         alt="Resource Branding"/></a>
                <div className={styles.browser}>
                    You are using {result.browser.name} version {result.browser.version.value}
                </div>
                <div className={styles.os}>
                    on
                    your {result.device.manufacturer.toString()} {result.device.model.toString()} {result.device.type.toString()}
                </div>
                <div className={styles.os}>
                    running {result.os.toString()}.
                </div>
                <div className={styles.os} style={{marginTop: '1rem'}}>
                    <ShowWindowDimensions/>
                </div>
            </div>
        </div>
    );
}

export default App;
