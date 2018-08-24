const initialState = {
  name: 'cat',
  isDomesticated: true,
};

export default function AnimalsReducer(state = initialState, action) {
  console.log('reducers', action);
  switch (action.type) {
    case "UPDATE_ANIMAL_NAME":
      return Object.assign({}, state, action.value);
    default:
      return state;
  }
}