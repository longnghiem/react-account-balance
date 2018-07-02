import React, { Component } from 'react';
import './App.css';
import FormComponent from './components/FormComponent';
import Transaction from './components/Transaction.js'
import SumPanel from './components/SumPanel'
import TransactionsBook from './components/transactions-book.js'


class App extends Component {
  constructor(){
    super()
    this.state = {
      transactions: TransactionsBook,
    }
    this.selectedType = "income";
  }
  getLastId = () => {
    const ids = this.state.transactions.map (a => Number(a['transactionId']));
    ids.sort((a,b)=>{return a-b})
    return ids[ids.length -1]
  }

  submit = (description, amount, type) => {
    const transactionId = this.getLastId() + 1;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const now = new Date();
    const date = now.toLocaleDateString("en-US", options)
    const time = now.toLocaleTimeString("en-US")
    const transactionsCopy = [...this.state.transactions];
    transactionsCopy.push({transactionId, description, amount, type, date, time});
    this.setState({
      transactions: transactionsCopy,
      id : transactionId
    }, () => console.log(this.state.transactions))
  }

  getSumByType = (type) => {
    const transactionsCopy = [...this.state.transactions];
    return  transactionsCopy.filter(transaction=>transaction.type === type)
                            .reduce((sum, transaction)=>transaction.amount + sum,0)
  }

  render() {
    const listOfTransactions = this.state.transactions.map(transaction=>
        <Transaction key={transaction.transactionId} transaction={transaction} />
    )
    return (
      <div className="App">
        <SumPanel  incomeSum={this.getSumByType('income')}
                   expenseSum={this.getSumByType('expense')}/>
        <section>
        <FormComponent submit={this.submit}/>
        <div className="transactions-container">
          {listOfTransactions}
        </div>
      </section>
      </div>
    );
  }
}

export default App;
