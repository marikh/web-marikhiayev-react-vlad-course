import React from 'react';
import './card.css';
import classNames from 'classnames';

export default ({ children, className: parentClassName, ...props }) => (
    <div className={classNames(['raised-2','card', parentClassName])} {...props}>
      { children }
    </div>
)