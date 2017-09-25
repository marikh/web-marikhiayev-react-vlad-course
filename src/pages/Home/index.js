import React from 'react';
import { 
  Layout, 
  Heading, 
  Section, 
  Card,
  InputField
} from '../../components/';
import { HomeFooter, HomeHeroArea }  from './components/';


export default ({ links }) => (
    <Layout 
        heroContent={HomeHeroArea}
        footerContent={HomeFooter}
    >
        <Section>
            <Heading size={2}>Services</Heading>
                <div className="" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                </div>
            </Section>
            <Section>
                <Heading size={2}>Technologies</Heading>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                </div>
            </Section>
            <Section>
                <Heading size={2}>Blog Posts</Heading>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                </div>
            </Section>
            <Section>
                <Heading size={2}>Feedback</Heading>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                </div>
            </Section>
    </Layout>
)