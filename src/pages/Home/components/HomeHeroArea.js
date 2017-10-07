import React from 'react';
import { HeroArea, Heading } from '../../../components/';
import T from 'i18n-react';

export default () => (
    <HeroArea>
        <Heading size={1}>
            {T.translate("Home")}
        </Heading>
    </HeroArea>
)
