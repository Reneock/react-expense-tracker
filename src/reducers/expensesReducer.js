import {v4 as uuid} from "uuid";

let initialState = {
  expenses: [
    {item:"Groceries", date: "2022-01-28", amount: 500 , category:"Food", id: uuid(),},
  ]
};



let expensesReducer =(state=initialState, action)=>{
	switch (action.type) {
    case "ADD_EXPENSE":
      return {...state, expenses: [...state.expenses, action.payload] };

    case "EDIT_EXPENSE":
      const editedInfo = state.expenses.map ((expense)=>{
        if (expense.id===action.payload.updatedExpense.id){
          return action.payload.updatedExpense;
        }
        else{return expense}
      })

      return {...state, expenses:editedInfo}

    case "DELETE_EXPENSE":
      const unDeletedExpenses = state.expenses.filter ((expense)=>expense.id!==action.payload)
      return {...state, expenses:unDeletedExpenses}  

      default:
        return state;
      }     
};



export default expensesReducer;