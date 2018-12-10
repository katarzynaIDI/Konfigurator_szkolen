import React, { Component } from "react";
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
        recipient: "kellycmi62@gmail.com",
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
  handleCheckboxChange(evt) {
    this.setState({ isCheckboxChecked: evt.target.checked });
  }
  sendEmail = _ => {
    //DESTRUCTURING
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
    let myhtml =
      `<p>Zamówienie od: <strong>${
        this.senderName.value
      }</strong></p><p>Telefon kontaktowy: ${
        this.senderPhoneNumber.value
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
    fetch(
      `http://172.20.10.2:4005/send-email?recipient=${email.recipient}&sender=${
        email.sender
      }&topic=${email.subject}&html=${myhtml}&senderName=${senderName}`,
      { mode: "no-cors" }
    ).catch(err => console.log(err));
    alert(`Zamówienie zostało wysłane na adres ${email.sender}
Wkrótce skontaktujemy się z Państwem!`);
  };

  render() {
    const { email } = this.state;
    return (
      <div className="send-my-list__form-container">
        <Form onSubmit={this.sendEmail}>
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
              Potwierdzam, że zapoznałęm się i zgadzam się...
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
