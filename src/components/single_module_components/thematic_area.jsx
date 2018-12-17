import React, { Component } from "react";
import SingleModule from "./single_module";
import _ from "lodash";

class ThematicArea extends Component {
  constructor(props) {
    super(props);
    this.takeModuleNameFromSingleModule = this.takeModuleNameFromSingleModule.bind(
      this
    );
  }
  takeModuleNameFromSingleModule(value) {
    this.props.moveModuleNameUpToApp(value);
  }
  //Ordering array by Thematic Area
  orderedModules = _.groupBy(this.props.modules, thematicArea => {
    return thematicArea.thematicArea;
  });

  render() {
    return (
      <div className="main-layout__modules-display">
        {this.orderedModules &&
          Object.keys(this.orderedModules).map(e => {
            return (
              <div key={e} className="thematic-area-display">
                <h3 key={e} id={e}>
                  <span>{e}</span>
                </h3>
                <div className="main-layout__single-modules-display">
                  {Object.values(this.orderedModules[e]).map(f => (
                    <SingleModule
                      name={this.props.name}
                      moveModuleNameUpToThematicArea={
                        this.takeModuleNameFromSingleModule
                      }
                      clickedModuleNames={this.props.clickedModuleNames}
                      chosenModulesNames={this.props.chosenModulesNames}
                      key={f && f.id} //probably key={f.id} is enough, but just in case let it be...
                      {...f}
                    />
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default ThematicArea;
