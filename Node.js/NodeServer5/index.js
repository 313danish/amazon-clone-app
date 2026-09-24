// const express = require('express');
// const bodyParser = require('body-parser');
// const ejs = require('ejs');
// const mongoose = require('mongoose');


// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));

// app.set('view engine', 'ejs'); // Set EJS as the view engine    


// mongoose.
//     connect('mongodb+srv://admin:admin%40123@cluster0.p1jxd0c.mongodb.net/?appName=Cluster0').
//     then(() => {
//         console.log('Connected to MongoDB');
//     }).catch((err) => {
//         console.error('Error connecting to MongoDB:', err);
//     });


// app.get('/', (req, res) => {
//     res.json({ message: 'Hello World' });
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000 at http://localhost:3000');
// });


// run



// MERN:
// - M: MongoDB
// - E: Express
// - R: React.js
// - N: Node.js

// DB: Database (Permanent Storage)
// - Relational (SQL)
//     - Tables & Rows
//     - This is used when the structure/schema is defined
//     - Eg: MySQL, PostgreSQL, etc
// - Non-Relational (No-SQL)
//     - Collections & Documents
//     - This is used when the structure/schema is unclear
//     - Eg: MongoDB, AWS DynamoDB

// Driver:
// - Mongoose: ODM (Object Data Modeling) for MongoDB

// Example for a Mongoose Schema:
// - User
//     - firstName: String
//     - lastName: String
//     - email: String
//     - phoneNumber: Number

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('dotenv').config()


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs'); // Set EJS as the view engine    


mongoose.
    connect(process.env.MONGODB_URL).
    then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

const User = mongoose.model('User', {
    firstName: String,
    lastName: String,
    email: String,
    Phone: Number,
});
const Child = mongoose.model('Child', {
    firstName: String,
    lastName: String,
    email: String,
    Phone: Number,
});


app.get('/children', async (req,res) =>{
    try{
        const children = await Child.find();
        res.json({
            status:'SUCCESS',
            message:'Data fetched successfully.',
            data:children,
        })
    }
    catch(err){
          res.json({
            status:'FAILED',
            message:'SOMETHING WENT WRONG.'
        })
    }
});

app.post('/children', async (req,res) =>{
    try{
        const {firstName,lastName,email,phone } = req.body;
        const children = await Child.create({firstName,lastName,email,phone });
        res.json({
            status:'SUCCESS',
            message:'Data instered successfully.',
        })
    }
    catch(err){
          res.json({
            status:'FAILED',
            message:'SOMETHING WENT WRONG.'
        })
    }
});


app.patch('/children/:id', async (req,res) =>{
    try{
          const { id } = req.params;
        const { firstName, lastName, email, Phone } = req.body || {};
        const updatedChild = await Child.findByIdAndUpdate(
            id,
            {
                firstName,
                lastName,
                email,
                Phone
            });
        res.json({
            status:'SUCCESS',
            message:'Data updated successfully.',
        })
    }
    catch(err){
          res.json({
            status:'FAILED',
            message:'SOMETHING WENT WRONG.'
        })
    }
});

// app.patch('/children/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { firstName, lastName, email, Phone } = req.body || {};
//         const updatedChild = await Child.findByIdAndUpdate(
//             id,
//             {
//                 firstName,
//                 lastName,
//                 email,
//                 Phone
//             });
//         res.json({
//             status: 'SUCCESS',
//             message: 'Child entry updated successfully.',
//             data: updatedChild
//         });
//     } catch (error) {
//         console.log("ERROR:", error);
//         res.status(500).json({
//             status: 'FAILED',
//             message: error.message
//         });
//     }
// });


// app.get('/children', async (req, res) => {
//     try {
//         const children = await Child.find({})
//         res.json({
//             status: 'SUCCESS',
//             data: children
//         })
//     } catch (error) {
//         res.json({
//             status: 'FAILED',
//             message: 'Something went wrong'
//         })
//     }
// });

// app.post('/children', async (req, res) => {
//     try {
//         const { firstName, lastName, email, Phone } = req.body;
//         await Child.create({ firstName, lastName, email, Phone })
//         res.json({
//             status: 'Success',
//             message: 'Child created successfull.',
//         })
//     } catch (error) {
//         res.json({
//             status: 'Failed',
//             message: 'Something went wrong.',
//         })
//     }
// })

// app.patch('/children/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { firstName, lastName, email, Phone } = req.body;
//         await Child.findByIdAndUpdate(id, { firstName, lastName, email, Phone })
//         res.json({
//             status: 'Success',
//             message: 'Child entry updated successfull.',
//         })
//     } catch (error) {
//         res.json({
//             status: 'Failed',
//             message: 'Something went wrong.',
//         })
//     }
// })

// app.patch('/children/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { firstName, lastName, email, Phone } = req.body || {};
//         const updatedChild = await Child.findByIdAndUpdate(
//             id,
//             {
//                 firstName,
//                 lastName,
//                 email,
//                 Phone
//             });
//         res.json({
//             status: 'SUCCESS',
//             message: 'Child entry updated successfully.',
//             data: updatedChild
//         });
//     } catch (error) {
//         console.log("ERROR:", error);
//         res.status(500).json({
//             status: 'FAILED',
//             message: error.message
//         });
//     }
// });

// app.delete('/children/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const updatedChild = await Child.findByIdAndDelete(id);
//         res.json({
//             status: 'SUCCESS',
//             message: 'Child entry Deleted successfully.',
//             data: updatedChild
//         });
//     } catch (error) {
//         console.log("ERROR:", error);
//         res.status(500).json({
//             status: 'FAILED',
//             message: error.message
//         });
//     }
// });




app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}  at http://localhost:${PORT}`);
});
