import { COUNTER_TYPES } from '../reducers/counter.types';

const incrementCounter = (counter,steps) => ({
	type: COUNTER_TYPES.INCREMENT_COUNTER,payload:counter+steps
});

const decrementCounter = (counter,steps) => ({
	type: COUNTER_TYPES.DECREMENT_COUNTER,payload:counter-steps
});

const resetCounter = (counter) => ({
	type: COUNTER_TYPES.RESET_COUNTER,payload:counter
});


const incrementSteps = (steps) => ({
	type: COUNTER_TYPES.INCREMENT_STEPS,payload:steps
});

const decrementSteps = steps => ({
	type: COUNTER_TYPES.DECREMENT_STEPS,payload:steps
});

const resetSteps = steps => ({
	type: COUNTER_TYPES.RESET_STEPS,payload:steps
});

export { decrementCounter, decrementSteps,resetCounter, incrementCounter, incrementSteps,resetSteps };
