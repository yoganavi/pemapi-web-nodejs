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
import { solusiList, industriList, getSolusi, getIndustri } from './data/content.js';
import { waLink, WA_PHONE_DISPLAY, WA_PHONE_INTL } from './utils/whatsapp.js';
import { buildSeo } from './data/seo.js';


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
app.use(cookieParser(process.env.COOKIE_SECRET || 'jkgUtyh2673jh*'));
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'jkgUtyh2673jh*',
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());
 // Parses json, multi-part (file), url-encoded
app.use(bodyParser.json())

app.use('/', (req, res, next) => {
  if (req.get('host') === 'www.pemapi.com') {
    return res.redirect(301, `https://pemapi.com${req.originalUrl}`);
  }
  if (req.path === '/index.html') return res.redirect(301, '/');
  next();
});

// Expose WhatsApp helper + phone constants to all views
app.use((req, res, next) => {
  res.locals.waLink = waLink;
  res.locals.WA_PHONE_DISPLAY = WA_PHONE_DISPLAY;
  res.locals.WA_PHONE_INTL = WA_PHONE_INTL;
  res.locals.seo = buildSeo(req);
  next();
});

// Dynamic sitemap — generated from data + static routes
const buildSitemap = () => {
  const base = 'https://pemapi.com';
  const now = new Date().toISOString().split('T')[0];
  const urls = [
    { loc: '/', priority: '1.00', changefreq: 'monthly' },
    { loc: '/tentang-kami', priority: '0.80', changefreq: 'yearly' },
    { loc: '/pemapi-app', priority: '0.90', changefreq: 'monthly' },
    { loc: '/quiz-apar', priority: '0.90', changefreq: 'yearly' },
    { loc: '/product', priority: '0.90', changefreq: 'monthly' },
    { loc: '/product-apar?tipe=powder', priority: '0.80', changefreq: 'monthly' },
    { loc: '/product-apar?tipe=co2', priority: '0.80', changefreq: 'monthly' },
    { loc: '/product-apar?tipe=foam', priority: '0.80', changefreq: 'monthly' },
    { loc: '/product-apar?tipe=halon', priority: '0.80', changefreq: 'monthly' },
    { loc: '/solusi', priority: '0.90', changefreq: 'yearly' },
    ...solusiList.map(s => ({ loc: `/solusi/${s.slug}`, priority: '0.80', changefreq: 'yearly' })),
    { loc: '/industri', priority: '0.90', changefreq: 'yearly' },
    ...industriList.map(i => ({ loc: `/industri/${i.slug}`, priority: '0.70', changefreq: 'yearly' })),
    { loc: '/contact-us', priority: '0.80', changefreq: 'yearly' },
    { loc: '/kebijakan-mutu', priority: '0.30', changefreq: 'yearly' },
    { loc: '/privacy-policy', priority: '0.30', changefreq: 'yearly' },
    { loc: '/warranty-policy', priority: '0.30', changefreq: 'yearly' },
  ];
  const entries = urls.map(u =>
    `  <url>\n    <loc>${base}${u.loc}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
  ).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
};

app.get(['/sitemap.xml', '/sitemap_index.xml'], (req, res) => {
  res.type('application/xml').send(buildSitemap());
});

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
// Indonesian alias for contact page
app.get('/hubungi-kami', (req, res) => res.redirect(301, '/contact-us'));

app.get('/tentang-kami', (req, res) => {
  res.render('tentang-kami', { layout: 'main-layout' });
});

app.get('/quiz-apar', (req, res) => {
  res.render('quiz-apar', { layout: 'main-layout' });
});

app.get('/solusi', (req, res) => {
  res.render('solusi', { layout: 'main-layout', solusiList });
});

app.get('/solusi/:slug', (req, res) => {
  const solusi = getSolusi(req.params.slug);
  if (!solusi) return res.status(404).send('<h1>Solusi tidak ditemukan</h1>');
  res.render('solusi-detail', { layout: 'main-layout', solusi });
});

app.get('/industri', (req, res) => {
  res.render('industri', { layout: 'main-layout', industriList });
});

app.get('/industri/:slug', (req, res) => {
  const industri = getIndustri(req.params.slug);
  if (!industri) return res.status(404).send('<h1>Industri tidak ditemukan</h1>');
  res.render('industri-detail', { layout: 'main-layout', industri });
});

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
  res.render('kebijakan-mutu-2', { layout: false });
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