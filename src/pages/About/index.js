import React from 'react';
import { Route } from 'react-router-dom'
import {  AboutHeroArea } from './components/';
import { 
    Layout,
    Section,
} from '../../components/';

export default () => (
    <Layout heroContent={AboutHeroArea}>
        <Section>
            <h1>Yo! Mr. White!</h1>

            <div>
                <img src="https://2static.fjcdn.com/pictures/Yo+mr+white_2b7012_5767233.jpg" alt=""/>
            </div>
        </Section>
    </Layout>
)