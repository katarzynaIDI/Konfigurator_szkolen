import React, { Component } from "react";
import _ from "lodash";
import { Panel, Button } from "react-bootstrap";

class ModulesList extends Component {
  constructor(props) {
    super(props);
  }
  orderedModules = _.groupBy(this.props.modules, thematicArea => {
    return thematicArea.thematicArea;
  });

  render() {
    const btnStyle = {
      margin: "1px 1px 1px 10px"
    };
    return (
      <div>
        {/*console.log(Object.keys(this.props.modules).map(e => e))*/}
        {console.log(this.props.getModules)}
        {this.orderedModules &&
          Object.keys(this.orderedModules).map(e => (
            <Panel bsStyle="warning" defaultExpanded>
              <Panel.Heading>
                <Panel.Title toggle key={e}>
                  {e}
                </Panel.Title>
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
        {/*<button onClick={this.removeModuleFromDB()}>Usuń</button>*/}
      </div>
    );
  }
}

export default ModulesList;
