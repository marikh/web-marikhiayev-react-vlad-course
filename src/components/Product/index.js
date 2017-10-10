import React from 'react';
import './product.css';
import classNames from 'classnames';
import T from 'i18n-react';
import {Card} from '../../components'
import {
  Link
} from 'react-router-dom'

const Product = ({ id, name, imageUrl, shortDesc, price, cartItemId, deleteProductFromCart }) => (
    <Card className="product-card" style={{ backgroundImage: `url(${imageUrl})`}}>
        <Link to={`/products/${id}`} className="product-wrapping-link">
            <div className="product-top-title">
                <p className="product-title">{ name }</p>
                <p className="product-price">{ price }</p>
            </div>
            <p className="product-bottom-desc">{ shortDesc }</p>
        </Link>
        { deleteProductFromCart && cartItemId && <button className="cart-product-delete-button" id="remove-button" onClick={(e) => deleteProductFromCart(cartItemId)}>{T.translate("Delete")}</button>}
    </Card>
)

export default Product;