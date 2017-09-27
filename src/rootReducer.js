import { combineReducers } from 'redux';
import allProductsReducer from "./pages/Products/allProductsReducer";
// import productReducer from "./pages/productsPage/productReducer";
import appReducer from "./appReducer";
import cartReducer from "./pages/Cart/cartReducer";
import loginPageReducer from "./pages/Login/loginReducer";
import contactReducer from "./pages/Contact/contactReducer";
import menuReducer from "./components/Menu/menuReducer";
// import userReducer from "./components/User/userReducer";


export default combineReducers({
    app: appReducer,
    allProducts: allProductsReducer,
    // productPage: productReducer,
    cart: cartReducer,
    loginPage: loginPageReducer,
    menu: menuReducer,
    contact: contactReducer,    
})