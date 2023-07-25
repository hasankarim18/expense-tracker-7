import { useContext } from "react";
import { ExpenseCtx } from "../../Context/ExpenseContext/ExpesnseContext";

    
    
    const IncomeList = () => {
      const { incomeArr } = useContext(ExpenseCtx);
      return (
        <div>
          <h3 className="text-xl text-center font-bold">Income List </h3>
          <ul>
            {(() => {
              return incomeArr.map((item, i) => {
                const { incomeName, incomeAmount } = item;
                return (
                  <li className="border flex justify-between p-2 m-2" key={i}>
                    <span className="border-r-2 w-1/2">
                      {" "}
                      {i + 1}. {incomeName}
                    </span>
                    <span>${incomeAmount}</span>
                  </li>
                );
              });
            })()}
          </ul>
        </div>
      );
    };
    
    export default IncomeList;