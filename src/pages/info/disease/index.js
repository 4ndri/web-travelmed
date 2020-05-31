import React from 'react';

import Layout from '../../../components/Layout';
import DiseaseBlogRoll from '../../../components/blog/DiseaseBlogRoll';

export default class DiseaseIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className='full-width-image-container margin-top-0'
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        ></div>
        <section className='section'>
          <header className='container '>
            <h1 className='content has-text-weight-bold is-size-1 ndri-page-title'>Krankheiten</h1>
          </header>
          <div className='container'>
            <div className='content'>
              <DiseaseBlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
