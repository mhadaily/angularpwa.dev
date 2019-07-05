import React from 'react';
import { Layout, Header, SEO, CallToAction } from '../components';
import PageProps from '../models/PageProps';
import config from '../../config/SiteConfig';
import Blog from '../components/Blog';

export default class IndexPage extends React.Component<PageProps> {
  constructor(props) {
    super(props);
    window.location.replace('https://www.pwawithangular.com');
  }
  public render() {
    return (
      <Layout>
        <SEO title={`${config.siteTitle}`} />
        <main>
          {/* <Header /> */}
          {/* <Blog id="Blog" /> */}
        </main>
      </Layout>
    );
  }
}
