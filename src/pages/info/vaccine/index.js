import React from 'react';


import Layout from '../../../components/Layout';
import Header from '../../../components/Header';
import BlogInfo from '../../../components/blog/BlogInfo';

export default class DiseaseIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Header height='300px' backgroundSize='450px' headerImg='/img/home-katse.jpg'></Header>
        <BlogInfo widgets={['vaccine', 'news']} />
      </Layout>
    );
  }
}
