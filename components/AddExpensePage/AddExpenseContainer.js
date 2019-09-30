import React from 'react';
import FloatActionButton from '../_shared/FloatActionButton';
import AddExpensePresentation from './AddExpensePresentation';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addModalShowing: false
    }

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      addModalShowing: !this.state.addModalShowing
    })
  }

  render() {
    return(
      <>
        <FloatActionButton 
          onClick={this.toggleModal}/>

        <AddExpensePresentation 
          toggleModal={this.toggleModal}
          visible={this.state.addModalShowing}/>
      </>
    )
  }
}

