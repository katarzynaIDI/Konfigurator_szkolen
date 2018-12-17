import React, { Component } from "react";
import _ from "lodash";
import { Link, animateScroll as scroller } from "react-scroll";

class ThematicAreaNav extends Component {
  //Ordering array by Thematic Area
  orderedModules = _.groupBy(this.props.modules, thematicArea => {
    return thematicArea.thematicArea;
  });
  //Scrolling to accurate thematic area
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      //to change below animation - look into documentation
      smooth: "easeInOutQuart"
    });
  }

  render() {
    return (
      <div className="thematic-area-nav">
        <ul>
          <div className="thematic-area-nav__header">Obszary tematyczne:</div>
          <div className="thematic-area-nav__areas">
            {Object.keys(this.orderedModules).map(e => (
              <button className="thematic-area-nav__singleThematicArea" key={e}>
                <Link
                  activeClass="active"
                  className={e}
                  to={e}
                  spy={true}
                  smooth={true}
                  duration={500}
                  //down here can reagulate how deep scroll down(in px)
                  offset={-120}
                >
                  {e}
                </Link>
              </button>
            ))}
          </div>
        </ul>
      </div>
    );
  }
}

export default ThematicAreaNav;
