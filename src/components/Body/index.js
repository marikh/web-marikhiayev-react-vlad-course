import React from 'react';
import './body.css';
import classNames from 'classnames';

export default ({ children, className }) => (
    <section className={classNames(["App-body", className])}>
        { children }
    </section>
)