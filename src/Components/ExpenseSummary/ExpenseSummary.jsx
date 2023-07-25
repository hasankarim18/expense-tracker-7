import { useContext } from "react";
import { ExpenseCtx } from "../../Context/ExpenseContext/ExpesnseContext";


const ExpenseSummary = () => {
      const { incomeArr, expenseArr } = useContext(ExpenseCtx);

      const totalIncome = incomeArr.reduce((sum, currentValue) => {
       
        const value = parseFloat(currentValue.incomeAmount)
        const total = (sum + value);
      
        return total
      }, 0);

      const totalExpense = expenseArr.reduce((sum, currentValue) => {
       
        const value = parseFloat(currentValue.expenseAmount);
        const total2 = (sum + value);
       // console.log('total2', total2.toFixed(2));
        return total2
      }, 0);

      const balance = totalIncome - totalExpense
   
    return (
      <div className="p-4">
        <h2 className="text-3xl text-center">Expense Summary</h2>
        <div>
          <div className="overflow-x-auto">
            <table className="table border text-2xl">
              <tbody>
                {/* row 1 */}
                <tr className="bg-green-100">
                  <th>Type:</th>
                  <td>Amount ($)</td>
                </tr>
                <tr className="bg-green-100">
                  <th>Total Income</th>
                  <td>{totalIncome}</td>
                </tr>
                <tr className="bg-red-100">
                  <th>Total Expense</th>
                  <td>{totalExpense}</td>
                </tr>
                <tr
                  className={`${
                    totalIncome < totalExpense ? "bg-red-200" : "bg-green-200"
                  }`}
                >
                  <th>
                    <div className="flex justify-between">
                      <span> Balance</span>
                      <span>
                        {totalIncome < totalExpense ? "deficit" : "surplus"}
                      </span>
                    </div>
                  </th>
                  <td> {balance}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default ExpenseSummary;