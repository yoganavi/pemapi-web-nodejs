const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs');
app.use(expressLayouts)

app.use(express.static('public'));

app.get('/', (req, res) => {
  // res.send('Hello World! home')
	res.render('indexkosong' , {
		css: 'index.css',
		pagejs: 'index.js',
		layout: 'layouts/main-layout',
		navbar: 'navbar'
	});	
})
app.get('/tes', (req, res) => {
	res.render('index2' , {
		css: 'index2.css',
		pagejs: 'index2.js',
		layout: 'layouts/main-layout'
	});	
})
app.get('/plx', (req, res) => {
	res.render('parallax' , {
		css: 'style.css',
		pagejs: 'index2.js',
		layout: 'layouts/main-layout',
		navbar: 'navbar2',
	});	
})
app.get('/contact-us', (req, res) => {
	res.render('contact-us' , {
		css: 'contact-us.css',
		pagejs: 'contactus.js',
		layout: 'layouts/main-layout',
		navbar: 'navbar',
	});	
})

app.use('/', (req, res) => {
  res.status(404);  
  res.send('<h1>404</h1>');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

