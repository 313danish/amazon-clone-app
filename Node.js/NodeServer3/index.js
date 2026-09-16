const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); // Set EJS as the view engine

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// app.get('/sonu', (req, res) => {
//   res.sendFile(__dirname + '/sonu.html');
// }   );

// app.get('/danish', (req, res) => {
//   res.sendFile(__dirname + '/danish.html');
// });


app.get('/danish', (req, res) => {
  res.render('profile', { firstName: 'Danish', profileImage: 'https://reqres.in/img/faces/1-image.jpg', email: 'danish@example.com' }); // Render the EJS template for sonu with data
});
app.get('/poorvi', (req, res) => {
  res.render('profile', { firstName: 'Poorvi', profileImage: 'https://reqres.in/img/faces/3-image.jpg', email: 'poorvi@example.com' }); // Render the EJS template for sonu with data
});
app.get('/deeksha', (req, res) => {
  res.render('profile', { firstName: 'Deeksha' , profileImage: 'https://reqres.in/img/faces/2-image.jpg', email: 'deeksha@example.com' }); // Render the EJS template for sonu with data
});

app.listen(3000, () => {
  console.log('Server is running on port 3000 http://localhost:3000');
});



// /* view engine setup (dynamic pages) 
// Request parameters (dynamic urls/routes)
// */