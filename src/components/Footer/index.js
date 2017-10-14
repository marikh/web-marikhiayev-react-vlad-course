import React from 'react';
import './footer.css';
import classNames from 'classnames';

export default ({ children, className }) => (
    <footer className={classNames(["App-footer", className])}>
        { children }
    </footer>
)

