import React, { Component } from "react";
import "./send_my_list.scss";
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Checkbox
} from "react-bootstrap";

class SendMyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheckboxChecked: false,
      email: {
        recipient: "kamil.sobieraj.dev@gmail.com",
        sender: "",
        subject: "Konfigurator - Zamówienie od "
      }
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.senderMessage = React.createRef();
    this.senderName = React.createRef();
    this.senderPhoneNumber = React.createRef();
    this.senderPlaceOfTraining = React.createRef();
  }
  //**** Form checkbox ****\\
  handleCheckboxChange(evt) {
    this.setState({ isCheckboxChecked: evt.target.checked });
  }
  sendEmail = e => {
    //**** DESTRUCTURING ****\\
    e.preventDefault();
    const { email } = this.state;
    const {
      chosenModulesNames,
      dayOneDuration,
      dayTwoDuration,
      dayThreeDuration,
      dayFourDuration,
      dayFiveDuration,
      daySixDuration,
      daySevenDuration,
      dayEightDuration,
      dayNineDuration,
      dayTenDuration,
      isDayOneClosed,
      isDayTwoClosed,
      isDayThreeClosed,
      isDayFourClosed,
      isDayFiveClosed,
      isDaySixClosed,
      isDaySevenClosed,
      isDayEightClosed,
      isDayNineClosed
    } = this.props;
    let senderName = this.senderName.value;
    //**** Preapere html request to be send ****\\
    let myhtml =
      `<p>Zamówienie od: <strong>${
        this.senderName.value
      }</strong></p><p>Telefon kontaktowy: ${
        this.senderPhoneNumber.value
      }</p></strong></p><p>Adres e-mail: ${
        email.sender
      }</p><p>Miejsce szkolenia: ${
        this.senderPlaceOfTraining.value
      }</p><p>Wiadomość od zamawiającego: <p>"${this.senderMessage.value.replace(
        /(\r\n\t|\n|\r\t)/gm,
        ""
      )}"</p></p><p><strong>Zamówienie:</strong> </p>` +
      `${
        isDayOneClosed !== true || dayTwoDuration === 0
          ? `<ul>Pierwszy dzień:${chosenModulesNames
              .slice(0, dayOneDuration)
              .map(e => `<li>${e}</li>`)
              .join("")}</ul>`
          : isDayTwoClosed !== true || dayThreeDuration === 0
          ? `<ul>Pierwszy dzień: ${chosenModulesNames
              .slice(0, dayOneDuration)
              .map(
                e => `<li>${e}</li>`
              )}</ul><ul>Drugi dzień: ${chosenModulesNames
              .slice(dayOneDuration, dayOneDuration + dayTwoDuration)
              .map(e => `<li>${e}</li>`)
              .join("")}</ul>`
          : isDayThreeClosed !== true || dayFourDuration === 0
          ? `<ul>Pierwszy dzień: ${chosenModulesNames
              .slice(0, dayOneDuration)
              .map(
                e => `<li>${e}</li>`
              )}</ul><ul>Drugi dzień: ${chosenModulesNames
              .slice(dayOneDuration, dayOneDuration + dayTwoDuration)
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Trzeci dzień: ${chosenModulesNames
              .slice(
                dayOneDuration + dayTwoDuration,
                dayOneDuration + dayTwoDuration + dayThreeDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul>`
          : isDayFourClosed !== true || dayFiveDuration === 0
          ? `<ul>Pierwszy dzień: ${chosenModulesNames
              .slice(0, dayOneDuration)
              .map(
                e => `<li>${e}</li>`
              )}</ul><ul>Drugi dzień: ${chosenModulesNames
              .slice(dayOneDuration, dayOneDuration + dayTwoDuration)
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Trzeci dzień: ${chosenModulesNames
              .slice(
                dayOneDuration + dayTwoDuration,
                dayOneDuration + dayTwoDuration + dayThreeDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Czwarty dzień: ${chosenModulesNames
              .slice(
                dayOneDuration + dayTwoDuration + dayThreeDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul>`
          : isDayFiveClosed !== true || daySixDuration === 0
          ? `<ul>Pierwszy dzień: ${chosenModulesNames
              .slice(0, dayOneDuration)
              .map(
                e => `<li>${e}</li>`
              )}</ul><ul>Drugi dzień: ${chosenModulesNames
              .slice(dayOneDuration, dayOneDuration + dayTwoDuration)
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Trzeci dzień: ${chosenModulesNames
              .slice(
                dayOneDuration + dayTwoDuration,
                dayOneDuration + dayTwoDuration + dayThreeDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Czwarty dzień: ${chosenModulesNames
              .slice(
                dayOneDuration + dayTwoDuration + dayThreeDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Piąty dzień: ${chosenModulesNames
              .slice(
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul>`
          : isDaySixClosed !== true || daySevenDuration === 0
          ? `<ul>Pierwszy dzień: ${chosenModulesNames
              .slice(0, dayOneDuration)
              .map(
                e => `<li>${e}</li>`
              )}</ul><ul>Drugi dzień: ${chosenModulesNames
              .slice(dayOneDuration, dayOneDuration + dayTwoDuration)
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Trzeci dzień: ${chosenModulesNames
              .slice(
                dayOneDuration + dayTwoDuration,
                dayOneDuration + dayTwoDuration + dayThreeDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Czwarty dzień: ${chosenModulesNames
              .slice(
                dayOneDuration + dayTwoDuration + dayThreeDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Piąty dzień: ${chosenModulesNames
              .slice(
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Szósty dzień: ${chosenModulesNames
              .slice(
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration +
                  daySixDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul>`
          : isDaySevenClosed !== true || dayEightDuration === 0
          ? `<ul>Pierwszy dzień: ${chosenModulesNames
              .slice(0, dayOneDuration)
              .map(
                e => `<li>${e}</li>`
              )}</ul><ul>Drugi dzień: ${chosenModulesNames
              .slice(dayOneDuration, dayOneDuration + dayTwoDuration)
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Trzeci dzień: ${chosenModulesNames
              .slice(
                dayOneDuration + dayTwoDuration,
                dayOneDuration + dayTwoDuration + dayThreeDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Czwarty dzień: ${chosenModulesNames
              .slice(
                dayOneDuration + dayTwoDuration + dayThreeDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Piąty dzień: ${chosenModulesNames
              .slice(
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Szósty dzień: ${chosenModulesNames
              .slice(
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration +
                  daySixDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Siódmy dzień: ${chosenModulesNames
              .slice(
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration +
                  daySixDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration +
                  daySixDuration +
                  daySevenDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul>`
          : isDayEightClosed !== true || dayNineDuration === 0
          ? `<ul>Pierwszy dzień: ${chosenModulesNames
              .slice(0, dayOneDuration)
              .map(
                e => `<li>${e}</li>`
              )}</ul><ul>Drugi dzień: ${chosenModulesNames
              .slice(dayOneDuration, dayOneDuration + dayTwoDuration)
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Trzeci dzień: ${chosenModulesNames
              .slice(
                dayOneDuration + dayTwoDuration,
                dayOneDuration + dayTwoDuration + dayThreeDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Czwarty dzień: ${chosenModulesNames
              .slice(
                dayOneDuration + dayTwoDuration + dayThreeDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Piąty dzień: ${chosenModulesNames
              .slice(
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Szósty dzień: ${chosenModulesNames
              .slice(
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration +
                  daySixDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Siódmy dzień: ${chosenModulesNames
              .slice(
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration +
                  daySixDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration +
                  daySixDuration +
                  daySevenDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Ósmy dzień: ${chosenModulesNames
              .slice(
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration +
                  daySixDuration +
                  daySevenDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration +
                  daySixDuration +
                  daySevenDuration +
                  dayEightDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul>`
          : isDayNineClosed !== true || dayTenDuration === 0
          ? `<ul>Pierwszy dzień: ${chosenModulesNames
              .slice(0, dayOneDuration)
              .map(
                e => `<li>${e}</li>`
              )}</ul><ul>Drugi dzień: ${chosenModulesNames
              .slice(dayOneDuration, dayOneDuration + dayTwoDuration)
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Trzeci dzień: ${chosenModulesNames
              .slice(
                dayOneDuration + dayTwoDuration,
                dayOneDuration + dayTwoDuration + dayThreeDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Czwarty dzień: ${chosenModulesNames
              .slice(
                dayOneDuration + dayTwoDuration + dayThreeDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Piąty dzień: ${chosenModulesNames
              .slice(
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Szósty dzień: ${chosenModulesNames
              .slice(
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration +
                  daySixDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Siódmy dzień: ${chosenModulesNames
              .slice(
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration +
                  daySixDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration +
                  daySixDuration +
                  daySevenDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Ósmy dzień: ${chosenModulesNames
              .slice(
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration +
                  daySixDuration +
                  daySevenDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration +
                  daySixDuration +
                  daySevenDuration +
                  dayEightDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Dziewiąty dzień: ${chosenModulesNames
              .slice(
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration +
                  daySixDuration +
                  daySevenDuration +
                  dayEightDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration +
                  daySixDuration +
                  daySevenDuration +
                  dayEightDuration +
                  dayNineDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul>`
          : `<ul>Pierwszy dzień: ${chosenModulesNames
              .slice(0, dayOneDuration)
              .map(
                e => `<li>${e}</li>`
              )}</ul><ul>Drugi dzień: ${chosenModulesNames
              .slice(dayOneDuration, dayOneDuration + dayTwoDuration)
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Trzeci dzień: ${chosenModulesNames
              .slice(
                dayOneDuration + dayTwoDuration,
                dayOneDuration + dayTwoDuration + dayThreeDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Czwarty dzień: ${chosenModulesNames
              .slice(
                dayOneDuration + dayTwoDuration + dayThreeDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Piąty dzień: ${chosenModulesNames
              .slice(
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Szósty dzień: ${chosenModulesNames
              .slice(
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration +
                  daySixDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Siódmy dzień: ${chosenModulesNames
              .slice(
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration +
                  daySixDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration +
                  daySixDuration +
                  daySevenDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Ósmy dzień: ${chosenModulesNames
              .slice(
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration +
                  daySixDuration +
                  daySevenDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration +
                  daySixDuration +
                  daySevenDuration +
                  dayEightDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Dziewiąty dzień: ${chosenModulesNames
              .slice(
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration +
                  daySixDuration +
                  daySevenDuration +
                  dayEightDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration +
                  daySixDuration +
                  daySevenDuration +
                  dayEightDuration +
                  dayNineDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul><ul>Dziesiąty dzień: ${chosenModulesNames
              .slice(
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration +
                  daySixDuration +
                  daySevenDuration +
                  dayEightDuration +
                  dayNineDuration,
                dayOneDuration +
                  dayTwoDuration +
                  dayThreeDuration +
                  dayFourDuration +
                  dayFiveDuration +
                  daySixDuration +
                  daySevenDuration +
                  dayEightDuration +
                  dayNineDuration +
                  dayTenDuration
              )
              .map(e => `<li>${e}</li>`)
              .join("")}</ul>`
      }`;
    //**** Send an e-mail ****\\
    /*
    const data = new URLSearchParams(formElement);
    const options = {
      method: "POST",
      body: data
    };
    fetch("http://konfiguratorszkolen.pl/send-email", options)
      .then(response => {
        if (response.status !== 200) {
          return Promise.reject(response);
        }
        return response.json();
      })
      .then(json => console.log(json))
      .catch(error => console.log(error));*/
    const emailData = {
      recipient: email.recipient,
      subject: email.subject,
      html: myhtml,
      senderName: senderName
    };
    let formData = new FormData();
    formData.append("emailData", JSON.stringify(emailData));
    fetch("/send-email", {
      method: "POST",
      //mode: "same-origin",
      //credentials: "same-origin",
      body: formData
    })
      //.then(res => res.json())
      .then(res => res.text())
      .then(text => console.log(text))
      //.then(data => console.log(data))
      .catch(error => console.log(error));
    //Info after sending e-mail;
    console.log(formData);
    alert(`Zamówienie zostało wysłane!
Wkrótce skontaktujemy się z Państwem!`);
  };
  render() {
    const { email } = this.state;
    return (
      <div className="send-my-list__form-container">
        <Form
          //action="localhost:3001/mailer/index.php"
          //method="post"
          onSubmit={this.sendEmail}
        >
          <FormGroup>
            <ControlLabel className="send-my-list__form-input-label">
              Imię i nazwisko lub nazwa firmy:
            </ControlLabel>
            <FormControl
              className="send-my-list__form-input"
              type="text"
              placeholder="Podaj swoje imię i nazwisko lub nazwę firmy"
              required
              inputRef={ref => (this.senderName = ref)}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel className="send-my-list__form-input-label">
              Adres e-mail:
            </ControlLabel>
            <FormControl
              className="send-my-list__form-input"
              type="email"
              placeholder="Podaj biznesowy adres e-mail"
              required
              onChange={e =>
                this.setState({
                  email: {
                    ...email,
                    sender: e.target.value
                  }
                })
              }
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel className="send-my-list__form-input-label">
              Telefon kontaktowy:
            </ControlLabel>
            <FormControl
              type="text"
              placeholder="Podaj numer telefonu kontaktowego"
              required
              inputRef={ref => (this.senderPhoneNumber = ref)}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel className="send-my-list__form-input-label">
              Miejscowość szkolenia:
            </ControlLabel>
            <FormControl
              className="send-my-list__form-input"
              type="text"
              placeholder="Gdzie chciałbyś zorganizować szkolenie?"
              inputRef={ref => (this.senderPlaceOfTraining = ref)}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel className="send-my-list__form-input-label">
              Dodatkowe informacje:
            </ControlLabel>
            <FormControl
              className="send-my-list__form-input"
              componentClass="textarea"
              placeholder="Tutaj wpisz dodatkowe uwagi, które pomogą nam lepiej przygotować ofertę"
              inputRef={ref => (this.senderMessage = ref)}
            />
          </FormGroup>
          <FormGroup>
            <Checkbox
              inline
              checked={this.state.isCheckboxChecked}
              onChange={this.handleCheckboxChange}
            >
              Wyrażam zgodę na przetwarzanie przez CPAB SP. z o.o. ul.
              Jagiellońska 24/3, 40-032 Katowice, e-mail: biuro@cpab.pl, moich
              danych osobowych zawartych na niniejszym formularzu w celu
              komunikacji. Zostałam/em poinformowana/y, że przysługuje mi prawo
              do cofnięcia zgody na przetwarzanie danych osobowych w dowolnym
              momencie. Cofnięcie zgody nie będzie miało wpływu na
              przetwarzanie, którego dokonano na podstawie zgody przed jej
              cofnięciem. ponadto zapoznałem się z resztą{" "}
              <a
                href="https://cpab.pl/obowiazek-informacyjny/"
                target="_blank"
                rel="noopener noreferrer"
              >
                informacji
              </a>
              .
            </Checkbox>
          </FormGroup>
          <FormGroup>
            {this.state.isCheckboxChecked ? (
              <Button
                className="send-my-list__send-button"
                bsStyle="primary"
                type="submit"
              >
                Wyślij zamówienie!
              </Button>
            ) : (
              <Button
                className="send-my-list__send-button"
                bsStyle="default"
                type="submit"
                disabled
              >
                Wyślij zamówienie!
              </Button>
            )}
          </FormGroup>
        </Form>
      </div>
    );
  }
}
export default SendMyList;
