import React from 'react';
import { Layout, Section, Card, Heading } from '../../components/'
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
                { products.map(({ id, name, imageUrl, shortDesc, price }, index) => (
                    <Card key={`product-${id}-${index}`} className="product-card" style={{ backgroundImage: `url(${imageUrl})`}}>
                        <Link to={`${match.url}/${id}`} className="product-wrapping-link">
                            <div className="product-top-title">
                                <p className="product-title">{ name }</p>
                                <p className="product-price">{ price }</p>
                            </div>
                            <p className="product-bottom-desc">{ shortDesc }</p>
                        </Link>
                    </Card>
                  ))
                }         
            </div>
        </Section>
    </Layout>
);

const mapStateToProps = (state) => ({
    products : getProductsSelector(state)
})

export default withRouter(connect(mapStateToProps,)(Products));
