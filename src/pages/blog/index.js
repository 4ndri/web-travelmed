import React from 'react';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Container from '../../components/content/Container';
import PageSection from '../../components/content/PageSection';
import PageTitle from '../../components/content/PageTitle';
import PageDescription from '../../components/content/PageDescription';
import BlogRoll from '../../components/BlogRoll';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Header height='300px' backgroundSize='450px' headerImg='/img/home-katse.jpg'></Header>
        <Container className='flex flex-col'>
          <PageSection className='flex-auto'>
            <PageTitle>Aktuell</PageTitle>
            <BlogRoll />
          </PageSection>
        </Container>
      </Layout>
    );
  }
}
