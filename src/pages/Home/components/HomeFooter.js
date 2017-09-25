import React from 'react';
import { SocialLinks } from '../../../components/';
import { withRouter } from 'react-router-dom';

export default withRouter(({ links, history, location, match }) => {
    return (
        <div>
            <SocialLinks links={links} />
            <h3 onClick={() => history.goBack()}>Back</h3>
        </div>
    )
})

