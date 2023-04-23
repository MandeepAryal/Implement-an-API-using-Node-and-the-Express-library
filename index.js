const express = require('express');
const app = express();

// Dummy data
let users = [
  { id: 1, name: "Rajani", age: 20 },
  { id: 2, name: "Aayush", age: 22},
  { id: 3, name: "Sushant", age: 20 }
];

//get all users
app.get('/users', (req, res) => {
  res.send(users);
});

//get user by ID
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send('User not found');
  }
});

// create a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  console.log('Database updated');
  res.send('User created successfully');
});

//update user by ID
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedUserData = req.body;
  const index = users.findIndex(u => u.id === id);
  if (index !== -1) {
    users[index] = { id, ...updatedUserData };
    console.log('Database updated');
    res.send('User updated successfully');
  } else {
    res.status(404).send('User not found');
  }
});

//delete user by ID
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    console.log('Database updated');
    res.send('User deleted successfully');
  } else {
    res.status(404).send('User not found');
  }
});

// Start the server
app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
