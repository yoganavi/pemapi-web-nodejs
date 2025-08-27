import axios from "axios";

export default async function submitForm(req,res){
  let body = req.body;
  // check for form validation
  if(body.nama.trim() == '' || body.pesan.trim().length < 10 || body.phone.length < 11){
    req.flash('alert', 'message not send');
  }else{
    // let sending = await axios.post('https://script.google.com/macros/s/AKfycbw4lpVVgxYmsEOKamdTgPa38gPs76Gg-gAh8ihTCiDRvOsr-0fCD3mIbpOXfqlf9KJH/exec', body);
    let sending = await axios.post('http://127.0.0.1:4000/pemapi-web-nodejs/contact-us/submit', {body});
    req.flash('alert', sending.data.message);
  }
  res.redirect('/contact-us');  
};