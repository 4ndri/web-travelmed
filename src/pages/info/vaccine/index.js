import React from 'react';

import Layout from '../../../components/Layout';
import Header from '../../../components/Header';
import BlogInfo from '../../../components/blog/BlogInfo';

import Container from '../../../components/content/Container';
import Title from '../../../components/content/Title';
import PageTitle from '../../../components/content/PageTitle';
import PageSection from '../../../components/content/PageSection';

export default class DiseaseIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Header height='300px' backgroundSize='450px' headerImg='/img/home-katse.jpg'></Header>
        <Container>
          <PageSection className='content'>
            <h2>Grundregeln beim Impfen</h2>
            <ul className='list-disc list-inside'>
              <li>
                Nach einer fieberhaften Erkrankung sollte einige Tage bis zur Impfung gewartet
                werden.
              </li>
              <li>
                Grundsätzlich können am gleichen Tag beliebig viele Impfungen appliziert werden ohne
                ein grösseres Risiko von gehäuften oder stärkeren Nebenwirkungen als wenn sie
                einzeln geimpft werden.
              </li>
              <li>
                Lebendimpfungen z.B. Gelbfieber und Masern müssen entweder in der gleichen Sitzung
                oder besser in einem Abstand von 4 Wochen zueinander geimpft werden.
              </li>
              <li>
                Bei Immungeschwächten Personen oder bei der Einnahme von Medikamenten, welche das
                Immunsystem unterdrücken gelten besondere Impfregeln.
              </li>
            </ul>
          </PageSection>
        </Container>
        <BlogInfo widgets={['vaccine', 'news']} />
      </Layout>
    );
  }
}
