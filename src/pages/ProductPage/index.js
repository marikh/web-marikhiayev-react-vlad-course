import React from 'react';
import { Layout, Section, Card, Heading } from '../../components/'

import {
  Route,
  Link
} from 'react-router-dom'



export default ({ match }) => (
    <Layout>
        <Section>
            <Heading size={2}>
                { match.params.id }
            </Heading>
        </Section>
    </Layout>
)