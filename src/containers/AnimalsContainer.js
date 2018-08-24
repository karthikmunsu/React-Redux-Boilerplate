import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateAnimalName from ".././actions/animalsAction";
import Animals from '.././Animals';

const mapStatetoProps = (state) => {
  return state.AnimalsReducer;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateAnimalName,
    },
    dispatch
  );
};

export default connect(mapStatetoProps, mapDispatchToProps)(Animals);
