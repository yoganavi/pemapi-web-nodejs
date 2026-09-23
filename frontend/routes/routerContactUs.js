import express from "express";
import submitForm from "../actions/contact-us/submitForm.js";

const routerContactUs = express.Router();

routerContactUs.get('/', (req, res) => {
  const alert = req.flash('alert')[0];
  res.render('contact-us', {
    layout: 'main-layout',
    alert,
  });
});

routerContactUs.post('/submit', submitForm);

export { routerContactUs };
