export const UPDATE_ANIMAL_NAME = 'UPDATE_ANIMAL_NAME';

export default function updateAnimalName(name) {
  console.log('actions', name);
  return(dispatch) => dispatch({type: UPDATE_ANIMAL_NAME,value: name});
}