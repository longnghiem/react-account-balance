import React, {Component} from 'react';

export default class FormComponent extends Component {
  constructor(props){
    super(props)

    this.description = null
  }

  submitHandler = (event) => {
    event.preventDefault();
    let description = this.description.value;
    let amount = Number(this.refs.amount.value) ;
    let type = this.refs.type.value;
    this.props.submit(description, amount, type);
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input type='text' ref={description => this.description = description} name="description" id="description" required placeholder="Description"/>
        <input type='number' ref='amount' name="amount" id="amount" required placeholder="Amount"/>
        <select name="type" id="type" ref='type'>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button type="submit">Add</button>
      </form>
    )
  }
}
