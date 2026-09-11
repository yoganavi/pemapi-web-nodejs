import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import flash from 'connect-flash';
import bodyParser from 'body-parser';
import axios from 'axios';
import { routerHome } from './routes/routerHome.js';
import { routerContactUs } from './routes/routerContactUs.js';
import fs from 'fs';


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
  if(path == '/sitemap_index.xml') return res.send('./public/sitemap_index.xml')
  if(path == '/index.html') return res.redirect('/')
  if(req.get('host') == "www.pemapi.com") res.send(`<script>window.location.href = "https://pemapi.com"</script>`)

  // console.log("🚀 ~ file: app.js:36 ~ app.use ~ path:", path)
  next()
})

app.use('/' , routerHome);

app.get('/pemapi-app', async(req,res)=>{
  res.render('pemapi-app',{
    layout: 'main-layout',
  })
});

app.get('/product', async(req,res)=>{
  res.render('product',{
    layout: 'main-layout',
  })
});
app.get('/product-apar', async(req,res)=>{
  let tipe = req.query.tipe;
  // how to check file is exist in views folder using fs
  let file = `product-apar-${tipe}.ejs`;
  let filePath = `views/${file}`;
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send('<h1>Page not found</h1>');
    };
    
    res.render(`product-apar-${tipe}`,{
      layout: 'main-layout',
    });
  });
});

app.use('/contact-us', routerContactUs);

app.get('/privacy-policy', async(req,res)=>{
  res.render('privacy-policy',{
    layout: 'main-layout2',
  })
});

app.get('/warranty-policy', async(req,res)=>{
  res.render('warranty-policy',{
    layout: 'main-layout3',
  })
});

app.get('/kebijakan-mutu', async(req,res)=>{
  res.render('kebijakan-mutu-2',{
    layout: 'main-layout2',
    title: 'Kebijakan Mutu | PEMAPI',
  })
});

app.get('/quality-policy', async(req,res)=>{
  res.redirect('/kebijakan-mutu');
});

app.use('/', (req, res) => {
  console.log(`app.use/ page not found`);
  res.status(404)
  .send('<h1>Page not found</h1>');
})

// using express server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});