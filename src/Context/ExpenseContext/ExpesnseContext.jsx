
import { createContext, useState } from "react";


export const ExpenseCtx= createContext()
 
const ExpesnseContext = ({children}) => {
      const [income, setIncome] = useState([]);
      const [expense, setExpense] = useState([]);
     

       const value = {
        incomeArr: income, 
        expenseArr: expense, 
        setIncome, 
        setExpense
       };


    return <ExpenseCtx.Provider value={value} >{children}</ExpenseCtx.Provider>;
};

export default ExpesnseContext;