import { COUNTER_TYPES } from './counter.types';

export const counterReducer = (counter, { type, payload }) => {
	switch (type) {
		case COUNTER_TYPES.INCREMENT_COUNTER: {
			return { ...counter, value: payload  }; 
			
		}
		case COUNTER_TYPES.DECREMENT_COUNTER: {
			return { ...counter, value: payload  };
		}
		case COUNTER_TYPES.RESET_COUNTER: {
			return { ...counter, value: 0 };
		}
		case COUNTER_TYPES.INCREMENT_STEPS: {
			return { ...counter, steps: payload + 1 };
		}
		case COUNTER_TYPES.DECREMENT_STEPS: {
			return { ...counter, steps: payload - 1 };
		}
		case COUNTER_TYPES.RESET_STEPS: {
			return { ...counter, steps:0 };
		}
	}
};
