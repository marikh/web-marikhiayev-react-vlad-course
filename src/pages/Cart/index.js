import React from 'react';
import { Layout, Section, Card, Heading, Product } from '../../components/'
import { CartHeroArea } from './components/';
import './cart.css';
import { connect } from 'react-redux';
import { getCartProductsSelector } from './cartReducer';
import { deleteProductFromCart } from './actions';
import { withRouter } from 'react-router-dom';
import T from 'i18n-react';

import {
  Route,
  Link
} from 'react-router-dom'

export const Cart = ({ links, match, location, products, deleteProductFromCart }) => (
    <Layout heroContent={CartHeroArea}>
        <Section>
            <div className="products-horizontal-gallery">
                { products.map(({ id, name, imageUrl, shortDesc, price, cartItemId }, index) => {
                    const productProps = { id, name, imageUrl, shortDesc, price, cartItemId, deleteProductFromCart };
                    return <Product key={`product-${id}-${index}`} {...productProps} />})
                }         
            </div>
        </Section>
    </Layout>
);

const mapStateToProps = (state) => ({
    products : getCartProductsSelector(state)
})

export default withRouter(connect(mapStateToProps, { deleteProductFromCart })(Cart));
