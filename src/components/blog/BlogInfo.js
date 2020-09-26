import React from 'react';

import { Link } from 'gatsby';

import DiseaseBlogRoll from './DiseaseBlogRoll';
import VaccineBlogRoll from './VaccineBlogRoll';

import NewsBlogRoll from './NewsBlogRoll';

import Container from '../content/Container';
import PageSection from '../content/PageSection';
import PageTitle from '../content/PageTitle';

const widgetMap = {
  vaccine: {
    component: VaccineBlogRoll,
    link: '/info/vaccine',
    title: 'Impfungen',
  },
  disease: {
    component: DiseaseBlogRoll,
    link: '/info/vaccine',
    title: 'Krankheiten',
  },
  news: {
    component: ()=><NewsBlogRoll max={6} />,
    link: '/blog',
    title: 'Aktuell',
  },
};

function BlogInfo({ widgets }) {
  if (!widgets) {
    widgets = ['disease', 'vaccine', 'news'];
  }

  const blogrolls = widgets.map((w) => {
    const widget = widgetMap[w];
    if (!widget) {
      return null;
    }
    const WidgetBlogRoll = widget.component;

    return (
      <PageSection key={widget.title} className='flex-auto border-t-2 border-primary-700'>
        <Link to={widget.link}>
          <PageTitle>{widget.title}</PageTitle>
        </Link>
        <WidgetBlogRoll />
      </PageSection>
    );
  });
  return <Container className='flex flex-col'>{blogrolls}</Container>;
}

export default BlogInfo;
