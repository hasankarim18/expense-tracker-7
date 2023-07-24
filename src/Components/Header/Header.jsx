


const menuArray = [
    {name:"home", path:'/'},
    {name:"Add Expense", path:"add-expense"},
    {name:"Add Income", path:"add-income"}
 ]

const Header = () => {

    return (
        <header>
            <h2 className="text-2xl text-center py-2">Expense Tracker 7</h2>
        </header>
    );
};

export default Header;