import React, { Component } from "react";
import ShowModuleDetails from "./show_module_details";

class SingleModule extends Component {
  constructor(props) {
    super(props);
    this.handleAddModuleToList = this.handleAddModuleToList.bind(this);
    this.isButtonDisabled = this.isButtonDisabled.bind(this);
  }
  handleAddModuleToList() {
    this.props.moveModuleNameUpToThematicArea(this.props.name);
  }
  isButtonDisabled = (chosenModulesNames, name) =>
    chosenModulesNames.includes(name);

  render() {
    const { chosenModulesNames, name } = this.props;
    return (
      <div
        className={
          this.props.chosenModulesNames.includes(this.props.name) === true
            ? "single-module single-module--added"
            : "single-module single-module--not-added"
        }
      >
        <ShowModuleDetails
          details={this.props.details}
          name={this.props.name}
        />{" "}
        <div
          className="single-module__module-name-display-container"
          onClick={this.handleAddModuleToList}
        >
          <div className="single-module__module-name-display-title">
            {this.props.name}
          </div>
          <div className="single-module__add-button">
            {this.isButtonDisabled(chosenModulesNames, name) === true
              ? "Dodano!"
              : "Dodaj moduł"}
          </div>
        </div>
      </div>
    );
  }
}

export default SingleModule;
