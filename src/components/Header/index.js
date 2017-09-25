import React from 'react';
import Menu from '../Menu';

export default ({ children, menuConfig }) => (
    <header className="App-header">
        <Menu menuConfig={menuConfig} />
        <section className="App-subheader">{ children }</section>
    </header>
)