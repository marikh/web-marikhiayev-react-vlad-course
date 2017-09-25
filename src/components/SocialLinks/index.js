import React from 'react';
import classNames from 'classnames';
import './social-links.css';


const Link = ({ icon, link, text, type}) => (
    <a href={link} target="_blank" className={
        type === 'icons' ? 
        classNames(['fa',`fa-${icon}`]) :
        'text-link'
    }>{ type !== 'icons' && text }</a>
)

export default ({ links, type }) => (
    <div className="social-links">
        { links.map(( {text, icon, link } , index) => (
            <Link key={`link-${type}-${index}`} icon={icon} link={link} text={text} type={type}/>
        ))}
    </div>
)