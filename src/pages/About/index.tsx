import "./About.scss";

import { FC } from "react";
import { HomeCards } from "pages/Home/partials/HomeCards";

const About: FC = () => {
  return (
    <div className="about-page">
      <div className="cover">
        <div className="cover__content">
          <div className="top-section">
            <div className="top-section-title">
              <h1 className="top-section-title__text">About Us</h1>
            </div>
            <div className="top-section__content">
              <div className="content-preview">
                <h3 className="content-preview__title">What we do</h3>
                <p className="content-preview__excerpt">
                  autem vel eum iriure dolor in hendrerit in vulputate velit
                  esse molestie consequat, vel illum dolore eu feugiat ulla
                  facilsilis at vero eros et accumsan et iusto.
                </p>
              </div>
              <div className="content-preview">
                <h3 className="content-preview__title">What we offer</h3>
                <p className="content-preview__excerpt">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                  fugiat consequatur consectetur at, deleniti explicabo
                  reprehenderit.
                </p>
              </div>
            </div>
          </div>
          <div className="lower-section">
            <div className="headline">
              <div className="line line--horizontal line--left"></div>
              <h2 className="boxed-headline">Our services</h2>
              <div className="line line--horizontal line--right"></div>
            </div>

            <div className="line line--vertical line--top"></div>
            <div className="line line--vertical line--bottom"></div>

            <div className="spacer"></div>
            <div className="content-preview content-preview--left content-preview--top">
              <h3 className="content-preview__title">What</h3>
              <p className="content-preview__excerpt">
                Adipisicing elit. Ipsam dicta, quia similique nulla eum
                voluptatibus quae laborum, consectetur sunt necessitatibus
                corrupti quaerat.
              </p>
            </div>

            <div className="content-preview  content-preview--right content-preview--top">
              <h3 className="content-preview__title">Who</h3>
              <p className="content-preview__excerpt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                provident vel, architecto numquam nemo repellat.
              </p>
            </div>
            <div className="spacer"></div>
            <div className="spacer"></div>

            <div className="content-preview content-preview--left content-preview--bottom">
              <h3 className="content-preview__title">When</h3>
              <p className="content-preview__excerpt">
                Doloremque, totam blanditiis itaque ipsam commodi atque, vero,
                laborum eos quaerat nostrum deleniti laboriosam debitis.
              </p>
            </div>

            <div className="content-preview content-preview--right content-preview--bottom">
              <h3 className="content-preview__title">Our Values</h3>
              <p className="content-preview__excerpt">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                pariatur eaque nihil tempora facere dicta mollitia impedit, nisi
                eius.
              </p>
            </div>
          </div>
        </div>
      </div>
      <HomeCards />
    </div>
  );
};

export default About;
