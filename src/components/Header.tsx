import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          bookCover: file(relativePath: { eq: "assets/pwa-angular-book-front-cover.png" }) {
            childImageSharp {
              fluid(maxWidth: 500, quality: 40) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={(data: any) => (
        <header
          style={{ backgroundImage: "url('https://www.ffcommunity.com/bin/uploads/2018/07/ocean-wave-background.jpg')" }}
          className="page header color-1 overlay gradient gradient-34 alpha-7 image-background cover"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="display-4 color-1 mb-4">Angular Progressive Web App Blog</h1>
                <p className="lead color-1">What our awesome community is talking about</p>
              </div>
            </div>
          </div>
        </header>
      )}
    />
  );
};
export default Header;
