import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter, 
  RouterProvider
} from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage'
import AddExpense from './Components/AddExpense/AddExpense'
import AddIncome from './Components/AddIncome/AddIncome'
import Home from './Components/Pages/Home'
import ExpesnseContext from './Context/ExpenseContext/ExpesnseContext'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-expense",
        element: <AddExpense />,
      },
      {
        path: "/add-income",
        element: <AddIncome />,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ExpesnseContext>
      <RouterProvider router={router} />
    </ExpesnseContext>
  </React.StrictMode>
);
