import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";


const Layout = () => {
    return (
        <div className="container mx-auto">
            <Header />
                <div>
                    <Outlet />
                </div>
            <Footer />
        </div>
    );
};

export default Layout;