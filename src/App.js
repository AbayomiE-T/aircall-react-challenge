import React from 'react';
import ReactDOM from 'react-dom';

import styles from './index.module.css';
import Header from './Header';

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <div className={styles['container-view']}>Some activities should be here</div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
