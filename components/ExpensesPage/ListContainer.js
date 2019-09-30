import React from 'react';
import ListPresentation from './ListPresentation';
import HeaderPresentation from './HeaderPresentation';
import AddExpenseContainer from '../AddExpensePage/AddExpenseContainer';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfExpenses: [1,2,3,4,5]
    }
  }

  render() {
    return(
      <>
        <HeaderPresentation monthTotal={2504.90}/>
        <ListPresentation items={this.state.listOfExpenses} />
        <AddExpenseContainer />
      </>
    )
  }
}

