import React, { Component } from "react";
import "./admin_modules_list.scss";
import groupBy from "lodash.groupby";
import { Panel, Button } from "react-bootstrap";

class ModulesList extends Component {
  //**** Ordering array by Thematic Area ****\\
<<<<<<< HEAD:src/components/admin_Components/modules_list.jsx
  orderedModules = _.groupBy(this.props.modules, thematicArea => {
=======
  orderedModules = groupBy(this.props.modules, thematicArea => {
>>>>>>> sass-rewrite:src/components/admin_components/admin_modules_list/admin_modules_list.jsx
    return thematicArea.thematicArea;
  });

  render() {
    const btnStyle = {
      margin: "1px 1px 1px 10px"
    };
    return (
      <div>
        {console.log(window.location)}
        {this.orderedModules &&
          Object.keys(this.orderedModules).map(e => (
            <Panel bsStyle="warning" defaultExpanded key={e}>
              <Panel.Heading>
                <Panel.Title toggle>{e}</Panel.Title>
              </Panel.Heading>
              <Panel.Collapse>
                <Panel.Body>
                  <ul key={e.name}>
                    {Object.values(this.orderedModules[e]).map(f => (
                      <li key={f && f.id}>
                        {f.name}{" "}
                        <Button
                          style={btnStyle}
                          onClick={e => this.props.removeModuleFromDB(e, f.id)}
                        >
                          Usuń
                        </Button>
                      </li>
                    ))}
                  </ul>
                </Panel.Body>
              </Panel.Collapse>
            </Panel>
          ))}
      </div>
    );
  }
}

export default ModulesList;