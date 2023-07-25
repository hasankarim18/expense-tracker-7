import ExpenseSummary from "../ExpenseSummary/ExpenseSummary";
import ExpenseList from "../Expenses/ExpenseList";
import IncomeList from "../Expenses/IncomeList";

const Home = () => {
    return (
        <div>
            <ExpenseSummary />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 ">
                <div>
                    <IncomeList />
                </div>
                <div>
                    <ExpenseList />
                </div>
            </div>

        </div>
    );
};

export default Home;