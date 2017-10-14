import React from 'react';
import classNames from 'classnames';
import SocialLinks from '../SocialLinks/';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getShowProtectedLinksSelector } from './menuReducer';
import { logOut } from '../../common/globalActions';
import './menu.css';
import T from 'i18n-react';

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
        name: 'SignIn',
        path: '/login'
    }
]

export const Menu = ({ children, menuConfig: { menuState, open, socialLinks }, showProtectedLinks, logOut }) => (
<div className="App-menubar">
        <label className="hamburger-icon fa fa-bars" onClick={() => open()}/>
        <div className={classNames(['menu-content', menuState && 'opened' ])}>
            <div className={classNames(["links-container", T.translate("LangDirection") === "rtl" && "rtl"])}>
                { navigationLinks.map(({ name, path }, index) => { 
                        if(path == '/login' && showProtectedLinks)
                            return;
                        
                        if(path == '/cart' && !showProtectedLinks)
                            return;

                        return (<Link to={`${path}`} className="page-link" key={`page-${name.toLowerCase()}-${index}`}>
                                    <T.span text={{ key: `${name}`}}/>
                                </Link>)
                    }
                )}


                {  showProtectedLinks && <Link className="page-link" to="/" onClick={() => logOut()}>
                                            <T.span text={{ key: "LogOut"}}/>
                                        </Link>
                }
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

export default connect(mapStateToProps, { logOut })(Menu);
