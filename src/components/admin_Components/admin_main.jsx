import React, { Component } from "react";
import firebase from "firebase";
import { DB_CONFIG } from "../../database/db_config";
import ModulesList from "./modules_list";
import {
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from "react-bootstrap";

class AdminMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      thematicArea: "",
      moduleName: "",
      details: "",
      loading: true
    };

    this.addModuleToDataBase = this.addModuleToDataBase.bind(this);
    this.removeModuleFromDB = this.removeModuleFromDB.bind(this);
    this.getModules - this.getModules.bind(this);
    this.addId = React.createRef();
    this.forceUpdate = this.forceUpdate.bind(this);
  }
  componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(DB_CONFIG);
    }
  }

  getModules() {
    let ref = firebase.database().ref();
    ref.once("value").then(dataSnapshot => {
      this.response = dataSnapshot.val()["modulesData"];
      this.setState({ modules: this.response, loading: false });
    });
  }
  componentDidMount() {
    this.getModules();
  }

  addModuleToDataBase(e) {
    e.preventDefault();
    this.toSplit = this.addDetails.value;
    this.splited = this.addDetails.value.split(";");
    this.addDetailsArray = [];
    this.splited.map(e =>
      e.charAt(0) === " "
        ? this.addDetailsArray.push(e.substring(1))
        : this.addDetailsArray.push(e)
    );
    let newModuleKey = firebase
      .database()
      .ref()
      .child("modulesData")
      .push().key;
    let postData = {
      name: this.addModuleName.value,
      thematicArea: this.addThematicArea.value,
      id: newModuleKey,
      details: this.addDetailsArray
    };
    let update = {};
    update["/modulesData/" + newModuleKey] = postData;
    firebase
      .database()
      .ref()
      .update(update);
    this.setState({ loading: true });
    this.getModules();
  }
  removeModuleFromDB(e, moduleDBKey) {
    e.preventDefault();
    firebase
      .database()
      .ref()
      .child("/modulesData/" + moduleDBKey)
      .remove();
    this.setState({ loading: true });
    this.getModules();
  }
  render() {
    const { loading } = this.state;
    return loading ? (
      <div>loading...</div>
    ) : (
      <div>
        <Col xs={8} md={6}>
          <h2>Dodaj moduł:</h2>
          <form>
            <FormGroup>
              <ControlLabel>Obszar tematyczny</ControlLabel>
              <FormControl
                id="thematic-area"
                type="text"
                inputRef={ref => {
                  this.addThematicArea = ref;
                }}
                required="true"
                placeholder="Nazwa obszaru tematycznego"
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Nazwa modułu</ControlLabel>
              <FormControl
                id="module-name"
                type="text"
                inputRef={ref => {
                  this.addModuleName = ref;
                }}
                required="true"
                placeholder="Nazwa modułu"
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Szczegóły modułu</ControlLabel>
              <FormControl
                id="module-details"
                componentClass="textarea"
                inputRef={ref => {
                  this.addDetails = ref;
                }}
                required="true"
                placeholder="Poszczególne szczegóły rozdzielaj średnikiem, np.: Szczegół 1; Szczegól 2 - detal 1; Szczegół 3"
              />
            </FormGroup>
            <Button onClick={this.addModuleToDataBase}>Dodaj moduł</Button>
          </form>
        </Col>
        <Col xs={4} md={6}>
          <ModulesList
            modules={this.state.modules}
            removeModuleFromDB={this.removeModuleFromDB}
          />
        </Col>
      </div>
    );
  }
}

export default AdminMain;
