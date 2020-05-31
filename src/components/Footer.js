import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Address from './Address';

import logo from '../img/logo.svg';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

const Footer = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query FOOTER_QUERY {
        allMarkdownRemark(filter: { fields: { slug: { eq: "/footer/" } } }) {
          edges {
            node {
              id
              rawMarkdownBody
              fields {
                slug
              }
              frontmatter {
                title
                links {
                  label
                  link
                }
              }
            }
          }
        }
      }
    `
  );
  const data = allMarkdownRemark.edges[0].node.frontmatter;
  return (
    <footer className='footer has-background-black has-text-white-ter'>
      <div className='content has-text-centered'>
        <span className='has-text-weight-light is-size-3-mobile is-size-2-tablet is-size-1-widescreen ndri-footer-title'>
          TravelMed
        </span>
      </div>

      <div className='content has-text-centered has-background-black has-text-white-ter'>
        <div className='container has-background-black has-text-white-ter'>
          <div className='columns'>
            <div className='column is-4'>
              <section className='menu'>
                <ul className='menu-list'>
                  <li>
                    <Link to='/' className='navbar-item'>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className='navbar-item' to='/about'>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className='navbar-item' to='/products'>
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link className='navbar-item' to='/contact/examples'>
                      Form Examples
                    </Link>
                  </li>
                  <li>
                    <a
                      className='navbar-item'
                      href='/admin/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Admin
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className='column is-4'>
              <section>
                <ul className='menu-list'>
                  <li>
                    <Link className='navbar-item' to='/blog'>
                      Latest Stories
                    </Link>
                  </li>
                  <li>
                    <a
                      className='navbar-item'
                      target='_blank'
                      rel='noopener noreferrer'
                      href='https://www.sanacare.ch/standort/luzern-loewencenter/'
                    >
                      sanacare
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className='column is-4'>
              <section className='has-text-left ndri-footer-address'>
                <Address />
              </section>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
