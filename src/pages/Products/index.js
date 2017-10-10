import React from 'react';
import { Layout, Section, Card, Heading, Product } from '../../components/'
import { ProductsHeroArea } from './components/';
import './products.css';
import { connect } from 'react-redux';
import { getProductsSelector } from './allProductsReducer';
import { withRouter } from 'react-router-dom';

import {
  Route,
  Link
} from 'react-router-dom'

export const Products = ({ links, match, location, products }) => (
    <Layout heroContent={ProductsHeroArea}>
        <Section>
            <div className="products-horizontal-gallery">
                { products.map(({ id, name, imageUrl, shortDesc, price }, index) => {
                    const productProps = { id, name, imageUrl, shortDesc, price };
                    return <Product key={`product-${id}-${index}`} {...productProps} />})
                }
            </div>
        </Section>
    </Layout>
);

const mapStateToProps = (state) => ({
    products : getProductsSelector(state)
})

export default withRouter(connect(mapStateToProps,)(Products));
