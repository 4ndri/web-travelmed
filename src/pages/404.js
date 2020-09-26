import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';

import Container from '../components/content/Container';
import PageSection from '../components/content/PageSection';
import PageTitle from '../components/content/PageTitle';
import PageDescription from '../components/content/PageDescription';

const NotFoundPage = () => (
  <Layout>
    <Header height='300px' backgroundSize='450px' headerImg='/img/home-katse.jpg'></Header>
    <Container>
      <PageSection>
        <PageTitle>Seite nicht gefunden</PageTitle>
        <PageDescription>Diese Seite existiert nicht mehr. Prüfen Sie ob der Link richtig geschrieben ist oder navigieren Sie über die Navigation.</PageDescription>
      </PageSection>
    </Container>
  </Layout>
);

export default NotFoundPage;
