const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000, () => {
  console.log('Server is running on port 3000 http://localhost:3000');
}   );


// run server using command: node index.js
