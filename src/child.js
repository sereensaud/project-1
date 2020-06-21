import React, {useReducer} from 'react';
import Reducer from './reducer';

function child() {
       
    let [state, dispatch] = useReducer(counterReducer,0)
    return (
        <div className="container">
            <h1 className="text-center">EXPENSE TRACKER</h1>
            <h3>YOUR BALANCE <br/> {state}</h3>
            <div className="expense-container">
               <h3>INCOME <br/> {state}</h3>
               <h3>EXPENSE <br/>{state} </h3>
            </div>
            <h3>History</h3><hr/>
              <ul className="transaction-list">
                  {transaction.map((transObj, ind)=>{
                      return(
                        <li>
                        <span>{transObj.desc}</span>
                      <span>{transObj.amount}</span>
                        </li>
                      )
                  })}
                  
              </ul>
           
            <h3>Add new transaction</h3><hr/>
                   
             <form className="transaction-form">
                <label>
                Enter Description <br/>
                <input className="" type="text" placeholder="Add Name" required/>
                </label>

                <br/>

                <label>
                Amount(+ for Income & - for Expense) <br/>
                    <input type="number" placeholder="Add Transaction" required/>
                </label>
                    <br/>
                <input value="ADD TRANSACTION" type="submit" />
            </form>

        </div>
    )
}

export default child;


