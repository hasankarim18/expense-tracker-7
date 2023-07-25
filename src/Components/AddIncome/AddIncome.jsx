import { useContext } from "react";
import { ExpenseCtx } from "../../Context/ExpenseContext/ExpesnseContext";

const AddIncome = () => {
  const { incomeArr, setIncome } = useContext(ExpenseCtx);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const incomeName = form.incomeName.value;
    const incomeAmount = parseInt(form.amount.value)

    const newExpense = [...incomeArr, { incomeName, incomeAmount }];

    setIncome(newExpense);
    form.reset()
  };

  // console.log(incomeArr);

  return (
    <div>
      <h2 className="text-2xl">Add Expense</h2>
      <div className="p-8 bg-green-100">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Income Name:</label>
            <input
              type="text"
              name="incomeName"
              className="w-full p-4 rounded-md"
              placeholder="Income Name"
            />
            <label className="mt-4 inline-block">Income Amount</label> <br />
            <input
              type="number"
              name="amount"
              className="w-full md:w-1/2 p-4 rounded-md "
              placeholder="1234"
            />
            <div className="mt-4 text-right">
              <button type="submit" className="btn btn-error">
                Add Expense
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddIncome;
