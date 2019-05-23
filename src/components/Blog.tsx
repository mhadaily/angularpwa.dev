import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft, faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons';

const Post = () => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card card-blog shadow-box shadow-hover border-0">
        <a href="#">
          <img className="card-img-top img-responsive" src="https://picsum.photos/350/200/?random&gravity=north" alt="" />
        </a>
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <div className="author d-flex align-items-center">
              <img className="author-picture rounded-circle icon-md shadow-box" src="assets/avatar/6.jpg" alt="..." />
              <p className="small bold my-0">Majid Hajian</p>
            </div>
            <nav className="nav">
              <a href="#" className="d-flex align-items-center mr-3 color-2">
                <i className="fas fa-heart " />
                <FontAwesomeIcon icon={faHeart} className="text-danger mr-2 favorite" />
                <span className="small">347</span>
              </a>
              <a href="#" className="d-flex align-items-center color-2">
                <i className="far fa-bookmark mr-2 bookmark" />
                <FontAwesomeIcon icon={faBookmark} className="mr-2 bookmark" />
                <span className="small">73</span>
              </a>
            </nav>
          </div>
          <hr />
          <p className="card-title regular">
            <a href="blog-post.html">Discover the Beauty of DashCore</a>
          </p>
          <p className="card-text color-2">
            Appropriately deliver standardized internal or "organic" sources whereas worldwide mindshare. Holisticly communicate premier...
          </p>
          <p className="bold small color-2 my-0">
            <small>Jun 14 2018, Read 12 mins</small>
          </p>
        </div>
      </div>
    </div>
  );
};

const Blog = (props: { id: string }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          bookCover: file(relativePath: { eq: "assets/ng-progressive-web-app-book.png" }) {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={(data: any) => (
        <section id={props.id} className="section b-b">
          <div className="container">
            <div className="row gap-y">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => {
                return <Post key={i} />;
              })}
            </div>
            <div className="row gap-y text-center">
              <div className="col-12">
                <nav className="nav justify-content-center mt-5">
                  <a className="btn btn-1 btn-rounded mr-5" href="#">
                    <FontAwesomeIcon icon={faAngleLeft} />
                    Previous
                  </a>
                  <a className="btn btn-1 btn-rounded" href="#">
                    Next
                    <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </section>
      )}
    />
  );
};

export default Blog;
