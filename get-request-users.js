const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
const process = require("./config");
const PORT = process.PORT;

const app = express();
// app.use(express.json());

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
    { id: 2, name: 'Jane Smith', age: 25 }
];

//  Get all users
app.get('/users', (req, res) => {
    console.log("inside user get api");
    res.send(users);
});


// Get a single user by ID
// app.get('/users/:id', (req, res) => {
//     const { id } = req.params;
//     const user = users.find((user) => user.id === parseInt(id));
  
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
  
//     res.send(user);
//   });
