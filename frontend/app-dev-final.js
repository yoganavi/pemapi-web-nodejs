import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import flash from 'connect-flash';
import bodyParser from 'body-parser';
import axios from 'axios';

// import { Server } from 'socket.io';
// import { createServer } from 'http';

const app=express()
const PORT = process.env.PORT || 3011
// const server = createServer(app)
// const io = new Server(server)

// use ejs as view engine
app.set('view engine', 'ejs');
// use express layouts
app.use(expressLayouts);
// use static bild in middleware files
app.use(express.static('public'));
// use url-encoded middleware
app.use(express.urlencoded({ extended: true }));
// konfigurasi flash
app.use(cookieParser('secret'));
app.use(
  session({
    secret: 'jkgUtyh2673jh*',
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());
 // Parses json, multi-part (file), url-encoded
app.use(bodyParser.json())

// change parameter for socket.io for once refresh client
let change = true;

app.use('/', (req, res, next) => {
  let path = req.path
  if(path == '/favicon.ico') return
  // console.log("🚀 ~ file: app.js:36 ~ app.use ~ path:", path)
  next()
})

app.get('/', async(req,res)=>{
  // change parameter for socket.io for once refresh client
  change = false;

  res.render('home',{
    layout: 'main-layout',
  })
});

app.get('/pemapi-app', async(req,res)=>{
  // change parameter for socket.io for once refresh client
  change = false;
  
  res.render('pemapi-app',{
    layout: 'main-layout',
  })
});

app.get('/product', async(req,res)=>{
  // change parameter for socket.io for once refresh client
  change = false;
  
  res.render('product',{
    layout: 'main-layout',
  })
});
app.get('/product-apar', async(req,res)=>{
  // change parameter for socket.io for once refresh client
  change = false;

  let tipe = req.query.tipe;
  
  res.render(`product-apar-${tipe}`,{
    layout: 'main-layout',
  })
});
app.get('/contact-us', async(req,res)=>{
  // change parameter for socket.io for once refresh client
  change = false;
  let alert = req.flash('alert')[0];
  // directive class for alert
  res.render(`contact-us`,{
    layout: 'main-layout',
    alert,
    modalShow: alert ? '' : 'hidden',
    alertColor: alert=='success'? 'green' : 'red'
  })
});

app.post('/contact-us-submit', async(req,res)=>{
  let body = req.body;
  // console.log("🚀 ~ app.post ~ body:", body)
  let sending = await axios.post('https://script.google.com/macros/s/AKfycbw4lpVVgxYmsEOKamdTgPa38gPs76Gg-gAh8ihTCiDRvOsr-0fCD3mIbpOXfqlf9KJH/exec', body);
  
  req.flash('alert', sending.data.result);
  res.redirect('/contact-us')
})

app.use('/', (req, res) => {
  console.log(`app.use/ page not found`);
  res.status(404)
  .send('<h1>Page not found</h1>');
})

// use socket.io stream refressh page
// io.on('connection', (socket)=>{
//   console.log(change);
//   console.log('connected');
//   if(change){
//     socket.emit('refreshPage')
//   }
// })

// server.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}`)
// });
// / use socket.io stream refressh page


// using express server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});