import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import flash from 'connect-flash';
import bodyParser from 'body-parser';
import axios from 'axios';

const app=express()
const PORT = process.env.PORT || 3011

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



app.use('/', (req, res, next) => {
  let path = req.path
  if(path == '/favicon.ico') return
  console.log("🚀 ~ file: app.js:36 ~ app.use ~ path:", path)
  next()
})

app.get('/', async(req,res)=>{
  res.render('home',{
    layout: 'main-layout',
  })
})

app.use('/', (req, res) => {
  console.log(`app.use/ page not found`);
  res.status(404)
  .send('<h1>Page not found</h1>');
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})