import React from 'react';

export default class Transaction extends React.PureComponent {
  constructor(props){
    super(props)
  }

  // shouldComponentUpdate(nextProps) {
  // if (this.props.transaction.transactionId === nextProps.transaction.transactionId) return false;
  // return true;
  // }

  render(){
    return (
      <div className="transaction">
        <div>
          <div className='date'>{this.props.transaction.date}</div>
          <div className='time'>{this.props.transaction.time}</div>
        </div>
        <div>{this.props.transaction.description}</div>
        <div className={this.props.transaction.type==='income'? 'blue' : 'red'}>{this.props.transaction.amount} €</div>
      </div>
    )
  }
}
