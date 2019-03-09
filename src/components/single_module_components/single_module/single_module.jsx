import React, { Component } from "react";
import "./single_module.scss";
import ShowModuleDetails from "../show_module_details/show_module_details";
import Icon from "../../ui/icons/icon";

class SingleModule extends Component {
  constructor(props) {
    super(props);
    this.handleAddModuleToList = this.handleAddModuleToList.bind(this);
    this.isButtonDisabled = this.isButtonDisabled.bind(this);
  }
  handleAddModuleToList() {
    const {name, chosenModulesNames} = this.props;
    console.log(this.isButtonDisabled(name));
    if (chosenModulesNames.includes(name)) this.props.moveModuleNameUpToThematicArea(this.props.name);
  }

  isButtonDisabled = (name) => this.props.chosenModulesNames.includes(name);

  render() {
    const { name } = this.props;
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
        />

        <button
          className="single-module__tile-button"
          onClick={this.handleAddModuleToList}
        >
          <div className="single-module__tile-title">
            {this.props.name}
          </div>
          <div className="single-module__icon-wrapper">
            {this.isButtonDisabled(name) 
              ? <Icon className={"single-module__icon single-module__icon--add"} name={'icon-checkmark'} />
              : <Icon className={"single-module__icon single-module__icon--check"} name={'icon-add'} />
            }
            
          </div>
        </button>
      </div>
    );
  }
}

export default SingleModule;
