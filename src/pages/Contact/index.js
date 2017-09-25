import React from 'react';
import { 
    Layout,
    Section,
    Heading,
    Form
} from '../../components/';

const contactFormFields = [{ name:"name",label:"Name", type:"text", value:"", required:false},
                { name:"email",label:"Email", type:"email", value:"", required:true},
                { name:"message",label:"Message", type:"textarea", value:"", required:true}];

export default ({ links }) => (
    <Layout>
        <Section>
                <Heading size={2}>Contact</Heading>
                <Form formFields={contactFormFields} />
            </Section>
    </Layout>
)