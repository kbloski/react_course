import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import PropTypes from "prop-types";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout({ children }) {
    const navigation = useNavigation();
    console.log(navigation);
    const isLoading = navigation.state === 'loading';

    return (
        <div className="layout">
            { isLoading && <Loader /> }
            
            <Header />
            <main>
                {children}
                <Outlet />
            </main>
            <footer>
                <CartOverview />
            </footer>
        </div>
    );
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired, // Walidacja wymagana, aby wymusić przekazanie dzieci
};

export default AppLayout;
