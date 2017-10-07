
import React from 'react';
import T from 'i18n-react';

const NotFound = () => (
  <div style={{ display: 'flex', minHeight: '100vh', flex: '1', justifyContent: 'center', alignItems: 'center'}}>
    <h1>{ T.translate("NotFound") }</h1>
  </div>
)

export default NotFound;