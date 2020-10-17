import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CalculatorContainer from './containers/CalculatorContainer';
import reducer from './reducers';

const store = createStore(render);

render(
	<Provider store={store}>
		<CalculatorContainer />
	</Provider>
	document.getElementById('root')
);

ReactDOM.render(
  <CalculatorContainer />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
