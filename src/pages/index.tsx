import React from 'react';
import { Layout, Header, SEO, CallToAction } from '../components';
import PageProps from '../models/PageProps';
import config from '../../config/SiteConfig';
import Blog from '../components/Blog';

export default class IndexPage extends React.Component<PageProps> {
  public render() {
    return (
      <Layout>
        <SEO title={`${config.siteTitle}`} />
        <main>
          <Header />
          <Blog id="Blog" />
        </main>
      </Layout>
    );
  }
}
