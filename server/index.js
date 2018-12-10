const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

require("dotenv").config();
const API_KEY = process.env.REACT_APP_SG_MAIL_API_KEY;
sgMail.setApiKey(API_KEY);

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/send-email", (req, res) => {
  const { recipient, sender, topic, html, senderName } = req.query;
  let subject = topic + senderName;
  const msg = {
    to: recipient,
    from: sender,
    subject: subject,
    html: html
  };

  sgMail.send(msg).then();
});

app.listen(4005, () => {
  console.log("Server 4005 is listening");
});
