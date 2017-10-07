import React from 'react';
import { SocialLinks } from '../../../components/';
import { withRouter } from 'react-router-dom';
import T from 'i18n-react';

export default withRouter(({ links, history, location, match }) => {
    return (
        <div>
            <SocialLinks links={links} />
            <h3 onClick={() => history.goBack()}>{T.translate("Back")}</h3>
        </div>
    )
})

