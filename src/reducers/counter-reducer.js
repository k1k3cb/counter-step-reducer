import { COUNTER_TYPES } from './counter.types';

export const counterReducer = (counter, { type, payload }) => {
	switch (type) {
		case COUNTER_TYPES.INCREMENT_COUNTER: {
			return [...counter, counter + 1];
		}
		case COUNTER_TYPES.DECREMENT_COUNTER: {
			return [...counter, counter - 1];
		}
		case COUNTER_TYPES.INCREMENT_STEPS: {
			return [...counter, payload];
		}
		case COUNTER_TYPES.DECREMENT_STEPS: {
			return [...counter, payload];
		}
	}
};
