import { combineReducers } from 'redux';
import allProductsReducer from "./pages/Products/allProductsReducer";
// import productReducer from "./pages/productsPage/productReducer";
import appReducer from "./appReducer";
import cartReducer from "./pages/Cart/cartReducer";
// import userReducer from "./components/User/userReducer";


export default combineReducers({
    app: appReducer,
    allProducts: allProductsReducer,
    // productPage: productReducer,
     cart: cartReducer,
    // user: userReducer
})