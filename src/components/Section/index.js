import React from 'react';
import classNames from 'classnames';
import './section.css';

export default ({ children }) => (
    <div className={classNames(['raised-2','section', classNames])}>
        { children }
    </div>
)