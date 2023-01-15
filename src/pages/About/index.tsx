import "./About.scss";

import { FC } from "react";

const About: FC = () => {
  return (
    <div className="about-page">
      <div className="cover">
        <div className="cover__content">
          <div className="top-section">
            <div className="top-section-title">
              <h1 className="top-section-title__text">Geupap.</h1>
            </div>
            <div className="top-section__content">
              <div className="content-preview">
                <div className="content-preview__cat">The Ultimate</div>
                <h3 className="content-preview__title">Journal</h3>
                <p className="content-preview__excerpt">
                  autem vel eum iriure dolor in hendrerit in vulputate velit
                  esse molestie consequat, vel illum dolore eu feugiat ulla
                  facilsilis at vero eros et accumsan et iusto.
                </p>
              </div>
              <div className="content-preview">
                <div className="content-preview__cat">Street top pick</div>
                <h3 className="content-preview__title">Fashion Model</h3>
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
              <h2 className="boxed-headline">Special Fashion Week</h2>
              <div className="line line--horizontal line--right"></div>
            </div>

            <div className="line line--vertical line--top"></div>
            <div className="line line--vertical line--bottom"></div>

            <div className="spacer"></div>
            <div className="content-preview content-preview--left content-preview--top">
              <div className="content-preview__cat">Modern Dressing</div>
              <h3 className="content-preview__title">Special Summering</h3>
              <p className="content-preview__excerpt">
                Adipisicing elit. Ipsam dicta, quia similique nulla eum
                voluptatibus quae laborum, consectetur sunt necessitatibus
                corrupti quaerat.
              </p>
            </div>

            <div className="content-preview  content-preview--right content-preview--top">
              <div className="content-preview__cat">Style Random</div>
              <h3 className="content-preview__title">Inside Fashion Pack</h3>
              <p className="content-preview__excerpt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                provident vel, architecto numquam nemo repellat.
              </p>
            </div>
            <div className="spacer"></div>
            <div className="spacer"></div>

            <div className="content-preview content-preview--left content-preview--bottom">
              <div className="content-preview__cat">Group Jenita</div>
              <h3 className="content-preview__title">Sensual Woman Girl</h3>
              <p className="content-preview__excerpt">
                Doloremque, totam blanditiis itaque ipsam commodi atque, vero,
                laborum eos quaerat nostrum deleniti laboriosam debitis.
              </p>
            </div>

            <div className="content-preview content-preview--right content-preview--bottom">
              <div className="content-preview__cat">Power of Beauty</div>
              <h3 className="content-preview__title">Glamour Fashion Week</h3>
              <p className="content-preview__excerpt">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                pariatur eaque nihil tempora facere dicta mollitia impedit, nisi
                eius.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
