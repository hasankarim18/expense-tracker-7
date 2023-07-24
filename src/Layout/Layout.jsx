import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";


const Layout = () => {
    return (
      <div className="bg-gray-50">
        <div className="container mx-auto">
          <Header />
          <div className="py-4 bg-white">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    );
};

export default Layout;