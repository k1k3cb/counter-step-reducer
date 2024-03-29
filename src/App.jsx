import { useReducer } from 'react';
import {
	decrementCounter,
	decrementSteps,
	incrementCounter,
	incrementSteps,
	resetCounter,
	resetSteps
} from './actions/counter.actions';
import { counterReducer } from './reducers/counter-reducer';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	const [counter, dispatch] = useReducer(counterReducer, {
		value: 0,
		steps: 1
	});

	return (
		<>
			<GlobalStyles />

			<h1>COUNTER: {counter.value}</h1>

			<h1>STEPS: {counter.steps}</h1>

			<button onClick={() => dispatch(incrementCounter(counter.value, counter.steps))}>
				+
			</button>
			<button onClick={() => dispatch(decrementCounter(counter.value, counter.steps))}>
				-
			</button>
			<button onClick={() => dispatch(resetCounter(counter.value))}>Reset</button>
			
			<button onClick={() => dispatch(incrementSteps(counter.steps))}>
				Steps +
			</button>
			<button onClick={() => dispatch(decrementSteps(counter.steps))}>
				Steps -
			</button>

			<button onClick={() => dispatch(resetSteps(counter.steps))}>Rest Steps</button>
		</>
	);
};

export default App;
