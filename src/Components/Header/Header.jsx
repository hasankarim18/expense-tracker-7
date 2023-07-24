import { NavLink } from "react-router-dom";

const menuArray = [
  { name: "home", path: "/" },
  { name: "Add Expense", path: "add-expense" },
  { name: "Add Income", path: "add-income" },
];

const Header = () => {
  return (
    <header>
      <h2 className="text-2xl text-center py-2 bg-black text-white ">Your Personal Expense Tracker</h2>
      <div>       
        <ul className="grid grid-cols-3 site_menu items-center ">
          {
            (()=> {
                return menuArray.map((item, i) => {
                  return (
                    <li className="text-center" key={i}>
                      <NavLink
                        className={({ isActive }) =>
                           isActive ?
                            "inline-block w-full rounded-none  py-2 text-xl uppercase bg-green-500 text-white " : "inline-block py-2 text-xl uppercase bg-rose-400 w-full rounded-none text-white "
                        }
                        to={`${item.path}`}
                      >
                        {" "}
                        {item.name}{" "}
                      </NavLink>
                    </li>
                  );
                });
            })()
          }
        </ul>
      </div>
    </header>
  );
};

export default Header;
