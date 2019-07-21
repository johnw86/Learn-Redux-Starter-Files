import React from 'react';
import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import components
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

// N.B Default export does not need braces.
import store, { history } from './store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Main}>
                <IndexRoute component={PhotoGrid} />
                <Route path="/view/:postid" component={Single} />
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));
