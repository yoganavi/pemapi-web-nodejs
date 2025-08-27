import express from "express";
const routerContactUs = express.Router();

import submitForm from "../actions/contact-us/submitForm.js";

routerContactUs.get('/', async(req,res)=>{
  let alert = req.flash('alert')[0];
  // console.log("🚀 ~ routerContactUs.get ~ alert:", alert);

  res.render(`contact-us`,{
    layout: 'main-layout',
    alert,
    modalShow: alert ? '' : 'hidden',
    alertColor: alert=='success'? 'green' : 'red'
  })
});
routerContactUs.post('/submit', submitForm);

export {
    routerContactUs
};