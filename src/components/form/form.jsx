import React, { Component } from "react";

class Form extends Component {
  sendEmail = e => {
    e.preventDefault();
    const emailData = {
      recipient: "kellycmi62@gmail.com",
      subject: "Temat który dodałem",
      html: "<h1>Cokolwiek</h1>",
      senderName: "Moja firma taka piękna"
    };
    let formData = new FormData();
    formData.append("emailData", JSON.stringify(emailData));
    fetch("/send-email", {
      method: "POST",

      body: formData
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
    console.log(`formData: ${formData} EmailData: ${emailData}`);
    alert(`Zamówienie zostało wysłane!
Wkrótce skontaktujemy się z Państwem!`);
  };

  render() {
    return (
      <div>
        <button onClick={this.sendEmail}>Send me!</button>
      </div>
    );
  }
}

export default Form;
