import React from 'react';
import { Layout, Section, Card, Heading } from '../../components/'
import { connect } from 'react-redux';
import './productPage.css';
import { getCurrentProductSelector, getCanAddToCartSelector} from './productPageReducer';
import { withRouter } from 'react-router-dom';
import { addProductToCart } from '../Cart/actions';
import { navigatedToProductPageAction } from './actions';


import {
  Route,
  Link
} from 'react-router-dom'

class ProductPage extends React.Component{

    componentWillMount(){
        this.props.navigatedToProductPageAction(this.props.match.params.id)
    } 

    onAddToCart = (e) => {
        
        this.props.addProductToCart(this.props.productId);
        alert("Added '" + this.props.productName + "' to cart :)");
    }

    render(){

        const { productId, productName, productImageURL, productLongDescription, price, canAddToCart, 
            addProductToCart, navigatedToProductPageAction } = this.props;

        return (
            <Layout>
                <Section>
                    { productId == null ? 
                        <div>No such product :(</div> : 
                        (<div>
                            <Heading size={2}>
                                { productName }
                            </Heading>
                            <div className="product-page-image" src={productImageURL} style={{ backgroundImage: `url(${productImageURL})`}}/>
                            <p>{ productLongDescription }</p>
                            <div>Price:
                                <span> { price }</span>
                            </div>
                            { !canAddToCart ? 
                                <div>[Sign in so you will be able to buy it]</div> :
                                <button className="cart-product-add-button" id="add-to-cart-button" onClick={(e) => this.onAddToCart(e)}>Buy</button>
                            }
                        </div>) 
                   }
                </Section>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    const currentProduct = getCurrentProductSelector(state);
    if(currentProduct == null)
        return { productId : undefined };
    
    return { 
        productId :  currentProduct.id,
        productName :  currentProduct.name,
        productImageURL :  currentProduct.imageUrl,
        productLongDescription :  currentProduct.longDesc,
        price :  currentProduct.price,
        canAddToCart : getCanAddToCartSelector(state)
    }
}

export default withRouter(connect(mapStateToProps, { addProductToCart, navigatedToProductPageAction })(ProductPage));