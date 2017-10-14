import React from 'react';
import { 
    Header,
    Body,
    Footer,
    SocialLinks
} from '../components'

import { Route } from 'react-router-dom';
import classNames from 'classnames';
import T from 'i18n-react';

const socialLinks = [
  {
    text: 'Facebook',
    icon: 'facebook',
    link: 'facebook.com'
  },
  {
    text: 'Github',
    icon: 'github',
    link: 'github.com'
  },
  {
    text: 'Email',
    icon: 'envelope',
    link: 'vnovick@gmail.comm'
  }
]

export default class Layout extends React.Component {
  state = {
    menuState: false
  }

  open = () =>  {
    this.setState({
      menuState: true
    })
  }

  
  close = (e) => {
    if (this.state.menuState) {
      this.setState({
        menuState: false
      })
    } 
  }

  render() {
    const { 
        open, 
        close, 
        state: { menuState }, 
        props: { 
            heroContent: HeroArea,
            className,
            footerContent: FooterContent,
            children
        }
    } = this;
    return (
        <div className={classNames(["App", className ])} onClick={() => close()} >    
             <Header menuConfig={{ menuState, open, socialLinks }}>
                  { HeroArea && <HeroArea links={socialLinks}/> }
              </Header>
              <Body className={classNames([T.translate("LangDirection") === "rtl" && "rtl"])}>
                  { children }
              </Body>
              <Footer className={classNames([T.translate("LangDirection") === "rtl" && "rtl"])}>
                  { FooterContent ? <FooterContent links={socialLinks}/> : <SocialLinks links={socialLinks} />} 
              </Footer>
        </div>
    )
  }
}