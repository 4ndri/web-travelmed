import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Address from './Address';

import Container from '../components/content/Container';

import logo from '../img/logo.svg';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

const NavItem = ({ to, label, target }) => {
  return (
    <div className='block m-0'>
      <Link to={to} target={target} className='flex items-center p-1 m-0 h-full text-white'>
        {label}
      </Link>
    </div>
  );
};

const NavItemLink = ({ href, label, target, rel }) => {
  return (
    <div className='block m-0'>
      <a className='flex items-center p-1 m-0 h-full text-white' href={href} target={target} rel={rel}>
        {label}
      </a>
    </div>
  );
};

const Menu = ({ children }) => {
  return <div className='flex flex-col'>{children}</div>;
};

const FooterContainer = ({ children }) => {
  return <div className='p-3'>{children}</div>;
};

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
    <footer className='bg-primary-900 text-white'>
      <Container>
        <div className='my-3'>
          <h1 className='text-center text-white font-title text-2xl sm:text-3xl md:text-4xl'>
            <Link to='/'>TravelMed</Link>
          </h1>
        </div>
        <div className='flex flex-col md:flex-row'>
          <FooterContainer>
            <Menu>
              <NavItem to='/info' label='Informationen' />
              <NavItem to='/info/disease' label='Krankheiten' />
              <NavItemLink
                href='https://www.sanacare.ch/standort/luzern-loewencenter/'
                label='sanacare'
                target='_blank'
                rel='noopener noreferrer'
              />
              <NavItemLink 
              href='/admin'
              label='Admin'
              target='_blank'
              rel='noopener noreferrer'
              />
            </Menu>
          </FooterContainer>
          <FooterContainer>
            <Menu></Menu>
          </FooterContainer>
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
                      <Link className='navbar-item' to='/info'>
                        Informationen
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item' to='/products'>
                        Products
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
      </Container>
    </footer>
  );
};

export default Footer;
