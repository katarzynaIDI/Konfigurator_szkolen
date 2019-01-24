const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

require("dotenv").config();
const API_KEY = process.env.REACT_APP_SG_MAIL_API_KEY;

sgMail.setApiKey(API_KEY);

const app = express();

app.use(cors());
app.get("/", (req, res) => {
  res.send("Sending e-mail...");
});

app.get("/send-email", req => {
  const { recipient, sender, topic, html, senderName } = req.query;
  //**** e-mail subject ****\\
  let subject = `${topic} ${senderName} <<${recipient}>>`;
  const msg = {
    to: recipient,
    from: sender,
    subject: subject,
    html: html
  };
  const msgToClient = {
    to: sender,
    from: recipient,
    subject: "CPBP kongifurator szkoleń - zamówienie",
    html:
      "<p>Dziękujemy za złożenie zamówienia - wkrótce skontaktujemy się z Państwem!</p>"
  };
  sgMail
    .send(msg)
    .then()
    .catch(error => {
      console.error(error.toString());
      const { message, code, response } = error;
      const { headers, body } = response;
    });
  sgMail
    .send(msgToClient)
    .then()
    .catch(error => {
      console.error(error.toString());
      const { message, code, response } = error;
      const { headers, body } = response;
    });
});
app.listen(4005, () => {
  console.log("Server 4005 is listening");
});
