import React from 'react';
import styles from './App.module.css';
import logo from './logo-resource-w.svg';

const WhichBrowser = require('which-browser');
const result = new WhichBrowser(navigator.userAgent);

function App()
{

  return (
      <div className={styles.App}>
        <div className={styles.content}>
          <a className={styles.logoLink} href={"https://resourceatlanta.com"}><img className={styles.logo} src={logo}
                  alt="Resource Branding"/></a>
          <div className={styles.browser}>
            You are using {result.browser.name} {result.browser.version.value}
          </div>
          <div className={styles.os}>
            running on {result.os.toString()} to access this page
          </div>
        </div>
      </div>
  );
}

export default App;
