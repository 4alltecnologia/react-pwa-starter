import { TEST_ACTION } from './actions';

const initialState = {};

export default function test(state = initialState, action) {
  switch (action.type) {
    case TEST_ACTION:
      return { ...state, all: 4 };
    default:
      return state;
  }
}
