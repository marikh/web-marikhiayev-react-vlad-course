import React from 'react';
import classNames from 'classnames';
import './headings.css';
import T from 'i18n-react';

export default ({ size, children, className, ...props }) => 
    React.createElement(
        `h${size}`,{ 
            className: classNames([
                className, `heading heading-${size}`
            ]), ...props 
        } , T.translate(children)
    )