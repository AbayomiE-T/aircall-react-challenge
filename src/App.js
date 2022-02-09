import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import styles from './index.module.css';
import Header from './Header';

import store from './store/store';
import { Provider } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCallData } from './store/actions/activity-feed-actions';
import ActivityFeed from './components/Activity/ActivityFeed';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCallData());
  }, [])

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <div className={styles['container-view']}>
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));

export default App;
