import React from 'react';
import classNames from 'classnames';
import SocialLinks from '../SocialLinks/';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getShowProtectedLinksSelector } from './menuReducer';
import './menu.css';

const navigationLinks = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Products',
        path: '/products'
    },
    {
        name: 'Contact',
        path: '/contact'
    },
    {
        name: 'Cart',
        path: '/cart'
    },
    {
        name: 'Login',
        path: '/login'
    }
]

const Menu = ({ children, menuConfig: { menuState, open, socialLinks }, showProtectedLinks }) => (
<div className="App-menubar">
        <label className="hamburger-icon fa fa-bars" onClick={() => open()}/>
        <div className={classNames(['menu-content', menuState && 'opened' ])}>
            <div className="links-container">
                { navigationLinks.map(({ name, path }, index) => { 
                        if(name == 'Login' && showProtectedLinks)
                            return;
                        
                        if(name == 'Cart' && !showProtectedLinks)
                            return;

                        return (<Link to={`${path}`} className="page-link" key={`page-${name.toLowerCase()}-${index}`}>
                                    { name }
                                </Link>)
                    }
                )}

                {/*<Link className="page-link" to={{ pathname: '/products', search: 'referral=Amazon'}}>Referral Link</Link>*/}
            </div>
            <div className="socialLinks">
                <SocialLinks links={socialLinks} type="icons"/>
            </div>
        </div>
        <div className={classNames(['overlay', menuState && 'active'])}/>
    </div>
)

const mapStateToProps = (state) => ({
    showProtectedLinks: getShowProtectedLinksSelector(state),
})

export default connect(mapStateToProps,)(Menu);
