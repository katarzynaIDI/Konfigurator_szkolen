import React, { Component } from "react";
import { Link, animateScroll as scroller } from "react-scroll";
import logo_CPAB from "../../logos/logo_CPAB.png";
import down_drop_arrow from "../../logos/down-drop-1.png";

//Client still doesn't know whether want or not starting page

class LandingPage extends Component {
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      //can change below animation - look into documentation
      smooth: "easeInOutQuart"
    });
  }
  render() {
    return (
      <div>
        <div className="landing-page">
          <img
            src={logo_CPAB}
            alt="Logo CPAB"
            className="landing-page__logo-CPAB"
          />
          <h1 className="landing-page__title">Konfigurator</h1>
          <div className="landing-page__division-line" />
          <div className="landing-page__proceed-button">
            <Link
              activeClass="active"
              className={"landing-page__proceed-button"}
              to={"thematic-area-nav"}
              spy={true}
              smooth={true}
              duration={800}
              offset={0}
            >
              <img
                src={down_drop_arrow}
                alt="down-drop-arrow"
                className="landing-page__down-drop-arrow"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
