import React from 'react';
import './Animals.css'

export default class Animals extends React.Component {
  state = this.props;

  onClickHandler = () => {
    this.setState(prevState => ({
      name: 'Dog',
    }),() => this.props.updateAnimalName(this.state));
    
  }

  render() {
    return (
      <React.Fragment>
        <div className="animals">
            {this.state.name}
        </div>
        <div className="wrapper">
          <div className='btn' onClick={this.onClickHandler}>Click here to change</div>
        </div>
      </React.Fragment>
    );
  };
};
