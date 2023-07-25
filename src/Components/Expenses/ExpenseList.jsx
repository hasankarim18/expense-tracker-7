import { useContext } from "react";
import { ExpenseCtx } from "../../Context/ExpenseContext/ExpesnseContext";

const ExpenseList = () => {
  const { expenseArr } = useContext(ExpenseCtx);
  return (
    <div>
        <h3 className="text-xl text-center font-bold">Expense List </h3>
      <ul>
        {(() => {
         return expenseArr.map((item, i) => {
            const { expenseName, expenseAmount } = item;
            return (
              <li className="border flex justify-between p-2 m-2" key={i}>
                <span className="border-r-2 w-1/2"> {i+1}. {expenseName}</span>
                <span>${expenseAmount}</span>
              </li>
            );
          });
        })()}
      </ul>
    </div>
  );
};

export default ExpenseList;
