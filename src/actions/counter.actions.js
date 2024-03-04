import { COUNTER_TYPES } from '../reducers/counter.types';

const incrementCounter = (counter) => ({
	type: COUNTER_TYPES.INCREMENT_COUNTER,payload:counter
});

const decrementCounter = (counter) => ({
	type: COUNTER_TYPES.DECREMENT_COUNTER,payload:counter
});

const incrementSteps = (steps) => ({
	type: COUNTER_TYPES.INCREMENT_STEPS,payload:steps
});

const decrementSteps = steps => ({
	type: COUNTER_TYPES.DECREMENT_STEPS,payload:steps
});

export { decrementCounter, decrementSteps, incrementCounter, incrementSteps };
