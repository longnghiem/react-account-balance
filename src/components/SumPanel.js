import React from 'react'

const SumPanel = (props) => {
  const balance = props.incomeSum - props.expenseSum;
  return (
    <div className="sums-container">
      <div className='balance'>
        <h1 className={balance>0? '':'redbalance'}>{balance} €</h1>  
        <div>Balance</div>
      </div>
      <div className='income'>
        <h4>Income</h4>
        <span>{props.incomeSum} €</span>
      </div>
      <div className='expense'>
        <h4>Expense</h4>
        <span>{props.expenseSum} €</span>
      </div>
    </div>
  )
}

export default SumPanel;
