export const addExpense =(newExpense)=>{
  return{
    type:"ADD_EXPENSE",
    payload:newExpense
  }
}

export const editExpense = (updatedExpense) =>{
  return{
    type:"EDIT_EXPENSE",
    payload:{updatedExpense}
  }
}

export const deleteExpense = (id) =>{
  return{
    type:"DELETE_EXPENSE",
    payload:id
  }
}