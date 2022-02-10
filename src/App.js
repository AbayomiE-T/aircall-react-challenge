import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styles from './index.module.css';
import Header from './components/Navigation/Header';

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
    <Router>
      <div className={styles.app}>
        <div className={styles.container}>
          <Header />
          <div className={styles['container-view']}>
            <Switch>
              <Route path="/">
                <ActivityFeed />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('app'));

export default App;
