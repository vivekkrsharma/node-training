const express = require('express');
const process = require("./config");

// const bodyParser = require('body-parser');
// const cors = require('cors');

const PORT = process.PORT;

const app = express();

// Middleware setup
// app.use(bodyParser.json());
// app.use(cors());


app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

app.get("/status", (request, response) => {
    const responseData = {
        "data": "This is my first get api"
    };
    response.send(responseData);
});

// Sample user data (temporary)
let users = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Vivek Sharma', age: 29 },
    { id: 4, name: 'Vivek Sharma1', age: 19 },
    { id: 5, name: 'Vivek Sharma2', age: 23 }
];

//  Get all users
app.get('/users', (req, res) => {
    console.log("inside user get api");

    res.send(users);
});

// Get a single user by ID and GET api
app.get('/users/:id', (req, res) => {
    const { id } = req.params; //object destrcuturing
    const user = users.find((user) => user.id === parseInt(id));

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.send(user);
});


// Create a new user using POST API
// app.post('/addUser', (req, res) => {
//     const { name, age } = req.body;

//     // Simple validation
//     if (!name || !age) {
//         return res.status(400).send({ message: 'Name and age are required' });
//     }

//     const newUser = { id: users.length + 1, name, age };
//     users.push(newUser);

//     res.status(201).send(newUser);
// });


