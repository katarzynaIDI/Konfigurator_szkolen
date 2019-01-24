import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-scroll";
import logoCPAB from "../../logos/logo_CPAB.png";
//import smoothScrollIntoView from "smooth-scroll-into-view-if-needed";

class ThematicAreaNav extends Component {
  //**** Ordering array by Thematic Area ****\\
  orderedModules = _.groupBy(this.props.modules, thematicArea => {
    return thematicArea.thematicArea;
  });
  render() {
    return (
      <div className="thematic-area-nav">
        <div className="thematic-area-nav__logo-wrapper">
          <img
            className="thematic-area-nav__logo"
            src={logoCPAB}
            alt="Logo Coaching People"
          />
        </div>
        <ul className="thematic-area-nav__areas">
          {Object.keys(this.orderedModules).map(e => (
            <li
              tabIndex="1"
              className="thematic-area-nav__single-thematic-area"
            >
              <a key={e}>
                <Link
                  activeClass="active"
                  className={e}
                  to={e}
                  spy={true}
                  smooth={true}
                  duration={500}
                  //**** down here can reagulate how deep scroll down(in px) ****\\
                  offset={-120}
                >
                  {e}
                </Link>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ThematicAreaNav;
