import { combineReducers } from 'redux';
import allProductsReducer from "./pages/Products/allProductsReducer";
import productPageReducer from "./pages/ProductPage/productPageReducer";
import appReducer from "./appReducer";
import cartReducer from "./pages/Cart/cartReducer";
import loginPageReducer from "./pages/Login/loginReducer";
import contactReducer from "./pages/Contact/contactReducer";
import menuReducer from "./components/Menu/menuReducer";


export default combineReducers({
    app: appReducer,
    allProducts: allProductsReducer,
    productPage: productPageReducer,
    cart: cartReducer,
    loginPage: loginPageReducer,
    menu: menuReducer,
    contact: contactReducer,    
})