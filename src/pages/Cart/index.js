import React from 'react';
import { Layout, Section, Card, Heading } from '../../components/'
import { CartHeroArea } from './components/';
import './cart.css';
import { connect } from 'react-redux';
import { getCartProductsSelector } from './cartReducer';
import { deleteProductFromCart } from './actions';
import { withRouter } from 'react-router-dom';

import {
  Route,
  Link
} from 'react-router-dom'

export const Cart = ({ links, match, location, products, deleteProductFromCart }) => (
    <Layout heroContent={CartHeroArea}>
        <Section>
            <div className="products-horizontal-gallery">
                { products.map(({ id, name, imageUrl, shortDesc, price }, index) => (
                    <Card key={`product-${id}-${index}`} className="product-card" style={{ backgroundImage: `url(${imageUrl})`}}>
                        <Link to={`/products/${id}`} className="product-wrapping-link">
                            <div className="product-top-title">
                                <p className="product-title">{ name }</p>
                                <p className="product-price">{ price }</p>
                            </div>
                            <p className="product-bottom-desc">{ shortDesc }</p>
                        </Link>
                        <button className="cart-product-delete-button" id="remove-button" onClick={(e) => deleteProductFromCart(id)}>Delete</button>
                    </Card>
                  ))
                }         
            </div>
        </Section>
    </Layout>
);

const mapStateToProps = (state) => ({
    products : getCartProductsSelector(state)
})

export default withRouter(connect(mapStateToProps, { deleteProductFromCart })(Cart));
