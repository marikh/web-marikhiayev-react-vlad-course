// import React from 'react';
// import { 
//     Header,
//     Body,
//     Footer,
//     SocialLinks
// } from '../components'

// import { Route } from 'react-router-dom';
// import classNames from 'classnames';

// const socialLinks = [
//   {
//     text: 'Facebook',
//     icon: 'facebook',
//     link: 'facebook.com'
//   },
//   {
//     text: 'Github',
//     icon: 'github',
//     link: 'github.com'
//   },
//   {
//     text: 'Email',
//     icon: 'envelope',
//     link: 'vnovick@gmail.comm'
//   }
// ]

// export default class Layout extends React.Component {
//   state = {
//     menuState: false
//   }

//   open = () =>  {
//     this.setState({
//       menuState: true
//     })
//   }

  
//   close = (e) => {
//     if (this.state.menuState) {
//       this.setState({
//         menuState: false
//       })
//     } 
//   }

//   render() {
//     const { 
//         open, 
//         close, 
//         state: { menuState }, 
//         props: { 
//             heroContent: HeroArea,
//             className,
//             footerContent: FooterContent,
//             children
//         }
//     } = this;
//     return (
//         <div className={classNames(["App", className ])} onClick={() => close()} >    
//              <Header menuConfig={{ menuState, open, socialLinks }}>
//                   { HeroArea && <HeroArea links={socialLinks}/> }
//               </Header>
//               <Body>
//                   { children }
//               </Body>
//               <Footer>
//                   { FooterContent ? <FooterContent links={socialLinks}/> : <SocialLinks links={socialLinks} />} 
//               </Footer>
//         </div>
//     )
//   }
// }






import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import {Heading, HeroArea, Layout, Section} from '../components/';
// import {
//     HomeFooter,
//     HomeHeroArea    
// } from '../components/Home/components/';

const customFooter = () => {
    return (
        <div style={{ textAlign: "center"}}>
            footerContent property content of Layout
        </div>
    )
};

const hero = () => (<HeroArea>
        <Heading size={1}>
            Here: HeroArea component is the content of heroContent (property of Layout)
        </Heading>
    </HeroArea>);

storiesOf("Layout", module)
  .add('Layout with hero and custom footer defined', () => {

    const mockStore = configureStore()
    const INITIAL_STATE = {showProtectedLinks : false};

    const store= mockStore({ menu: INITIAL_STATE});

    return  <Provider store={store}>
                <MemoryRouter>
                    <Layout 
                        footerContent={customFooter}
                        heroContent={hero}>
                        Some content (Body component 's children )
                    </Layout>
                </MemoryRouter>
            </Provider>;
  }
  )
  .add('Layout without custom footer defined (default is shown)', () => {

    const mockStore = configureStore()
    const INITIAL_STATE = {showProtectedLinks : false};

    const store= mockStore({ menu: INITIAL_STATE});

    return  <Provider store={store}>
                <MemoryRouter>
                    <Layout 
                        heroContent={hero}>                        
                        Some content (Body component 's children )
                    </Layout>
                </MemoryRouter>
            </Provider>;
  }
  )
  .add('Layout without hero defined', () => {

    const mockStore = configureStore()
    const INITIAL_STATE = {showProtectedLinks : false};

    const store= mockStore({ menu: INITIAL_STATE});

    return  <Provider store={store}>
                <MemoryRouter>
                    <Layout 
                        footerContent={customFooter}>
                        Some content (Body component 's children )
                    </Layout>
                </MemoryRouter>
            </Provider>;
  }
  )
  .add('Layout without custom footer defined (default is shown) and without hero defined', () => {

    const mockStore = configureStore()
    const INITIAL_STATE = {showProtectedLinks : false};

    const store= mockStore({ menu: INITIAL_STATE});

    return  <Provider store={store}>
                <MemoryRouter>
                    <Layout>                        
                        Some content (Body component 's children )
                    </Layout>
                </MemoryRouter>
            </Provider>;
  }
  )





