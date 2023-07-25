import { useContext } from "react";
import { ExpenseCtx } from "../../Context/ExpenseContext/ExpesnseContext";

const AddExpense = () => {
     const { expenseArr, setExpense } = useContext(ExpenseCtx);

    const handleSubmit = (e)=> {  
        e.preventDefault()
        const form = e.target 
        const expenseName = form.expenseName.value 
        const expenseAmount = form.amount.value

        const newContex = [...expenseArr, {expenseName, expenseAmount}]

        setExpense(newContex)
          form.reset();
    }

///    console.log(expenseArr);

    return (
        <div>
            <h2 className="text-2xl">
                Add Expense 
            </h2>
            <div className="p-8 bg-rose-50">
                <form onSubmit={handleSubmit} >
                    <div>
                        <label>Expense Name:</label>
                        <input type="text" name="expenseName" className="w-full p-4 rounded-md" placeholder="Expense Name" />
                        <label className="mt-4 inline-block">Expense Amount</label> <br/>
                        <input type="number" name="amount" className="w-full md:w-1/2 p-4 rounded-md " placeholder="1234" />
                        <div className="mt-4 text-right">
                            <button type="submit"  className="btn btn-error" >Add Expense</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddExpense;