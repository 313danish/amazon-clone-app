

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs'); // Set EJS as the view engine

// mongoose.connect(process.env.MONGODB_URL)
//     .then(() => {
//         console.log('Connected to MongoDB');
//     })
//     .catch((err) => {
//         console.log(err);
//     })
const Child = mongoose.model('Child',
    {
        firstName:String,
        lastName:String,
        Phone:Number,
    }
);
const Boy = mongoose.model('Boy',
    {
        firstName:String,
        lastName:String,
        Phone:Number,
    }
);


const PORT = process.env.PORT || 3000;

// Connect to MongoDB first, then start the server on success
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT} at http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });


app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.get('/add', async (req, res) => {
    try {

        //  for one entry 
        // const newChild1 = await Child.create({
        //     firstName: "Rahul",
        //     lastName: "Sharma",
        //     Phone: 9876543210
        // });
       
        //  for more than one entry 
        const addedChildren = await Child.insertMany([
            { firstName: "Rahul", lastName: "Sharma", Phone: 9876543210 },
            { firstName: "Danish", lastName: "Khan", Phone: 9876543310 }
        ]);
        res.status(201).json({ 
            message: "Record added successfully!", 
            data: addedChildren });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port ${process.env.PORT} at http://localhost:${process.env.PORT}`);
// });


// run
// npm install -g nodemon
// nodemon index.js




// const express = require('express');
// const bodyParser = require('body-parser');
// const ejs = require('ejs');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// require('dotenv').config()


// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));

// app.set('view engine', 'ejs'); // Set EJS as the view engine    


// mongoose.
//     connect(process.env.MONGODB_URL).
//     then(() => {
//         console.log('Connected to MongoDB');
//     }).catch((err) => {
//         console.error('Error connecting to MongoDB:', err);
//     });

// const User = mongoose.model('User', {
//     firstName: String,
//     lastName: String,
//     email: String,
//     Phone: Number,
// });
// const Child = mongoose.model('Child', {
//     firstName: String,
//     lastName: String,
//     email: String,
//     Phone: Number,
// });

// app.get('/add', async (req, res) => {
//     try {
//         //  for one entry 
//         // const newChild1 = await Child.create({
//         //     firstName: "Rahul",
//         //     lastName: "Sharma",
//         //     Phone: 9876543210
//         // });
//         //  for more than one entry 
//         const addedChildren = await Child.insertMany([
//             { firstName: "Rahul", lastName: "Sharma", Phone: 9876543210 },
//             { firstName: "Danish", lastName: "Khan", Phone: 9876543310 },
//             { firstName: "Sonu", lastName: "Mon", Phone:9165497878 },
//         ]);
//         res.status(201).json({
//             message: "Record added successfully!",
//             data: addedChildren
//         });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

app.get('/children', async (req, res) => {
    try {
        const children = await Child.find({})
        res.json({
            status: 'SUCCESS',
            data: children
        })
    } catch (error) {
        res.json({
            status: 'FAILED',
            message: 'Something went wrong'
        })
    }

});

app.post('/children', async (req, res) => {
    try {
        const { firstName, lastName, email, Phone } = req.body;
        await Child.create({ firstName, lastName, email, Phone })
        res.json({
            status: 'Success',
            message: 'Child created successfull.',
        })
    } catch (error) {
        res.json({
            status: 'Failed',
            message: 'Something went wrong.',
        })
    }
})

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

app.patch('/children/:id', async (req, res) => {
    try {
        // console.log("ID:", req.params.id);
        // console.log("BODY:", req.body);
        const { id } = req.params;
        const { firstName, lastName, email, Phone } = req.body || {};
        const updatedChild = await Child.findByIdAndUpdate(
            id,
            {
                firstName,
                lastName,
                email,
                Phone
            }
        );
        console.log("UPDATED:", updatedChild);
        res.json({
            status: 'SUCCESS',
            message: 'Child entry updated successfully.',
            data: updatedChild
        });
    } catch (error) {
        console.log("ERROR:", error);
        res.status(500).json({
            status: 'FAILED',
            message: error.message
        });
    }
});


app.delete('/children/:id', async (req, res) => {
    try {
        // console.log("ID:", req.params.id);
        // console.log("BODY:", req.body);
        const { id } = req.params;
        // const { firstName, lastName, email, Phone } = req.body ;
        const updatedChild = await Child.findByIdAndDelete(id);
        // console.log("UPDATED:", updatedChild);
        res.json({
            status: 'SUCCESS',
            message: 'Child entry Deleted successfully.',
            data: updatedChild
        });
    } catch (error) {
        console.log("ERROR:", error);
        res.status(500).json({
            status: 'FAILED',
            message: error.message
        });
    }
});

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});
