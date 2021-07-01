// We import express
const express = require("express");
const connection = require("./db-config");

// We store all express methods in a variable called app
const app = express();

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
  } else {
    console.log(
      "connected to database with threadId :  " + connection.threadId
    );
  }
});

app.use(express.json());

// We store the port we want to use in a variable
const port = 3000;

// We create a get route for '/'
app.get("/", (request, response) => {
  // We send "Welcome to Express as a response"
  response.send("Welcome to Beesage Fake API");
});

// // We create a route '/user/:name'
// app.get("/users/:name", (request, response) => {
//   // We send "Welcome and the name passed in url after users/"
//   response.send(`Welcome, ${request.params.name}`);
// });

// const fruits = ["Apple", "Banana", "Kiwi"];

// // We create a route for '/fruits'
// app.get("/fruits", (request, response) => {
//   // We check if there is a fruit in our array match with the name query
//   // Ex: localhost:3000/fruits?name=Banana
//   if (fruits.includes(request.query.name)) {
//     // if the ressource is found, we send back the name
//     response.send(`Here is your ${request.query.name}`);
//   } else {
//     // if not we send a sorry message
//     response.send(`Sorry, ${request.query.name} not found...`);
//   }
// });

//

// We listen to incoming request on port
app.listen(port, () => {
  console.log(`Server is runing on ${port}`);
});

// GET THEM BEES!

app.get("/beewhoyouwant", (req, res) => {
  connection.query("SELECT * FROM beekeeper", (err, result) => {
    if (err) {
      res.status(500).send("Error retrieving data from database");
    } else {
      res.json(result);
    }
  });
});

// // MAKE / POST A NEW USER

// app.post("/api/users", (req, res) => {
//   const { firstname, lastname, email } = req.body;

//   connection.query(
//     "INSERT INTO users(firstname, lastname, email) VALUES (?, ?, ?)",

//     [firstname, lastname, email],

//     (err, result) => {
//       if (err) {
//         res.status(500).send("Error saving the user");
//       } else {
//         res.status(201).send("User successfully saved");
//       }
//     }
//   );
// });

// // PUT / CHANGE THE USER

// // This route will update a user in the DB
// app.put("/api/users/:id", (req, res) => {
//   // We get the ID from the url path :
//   const userId = req.params.id;
//   // We get the new attribute values for the user from req.body
//   const userPropsToUpdate = req.body;
//   // We send a UPDATE query to the DB
//   connection.query(
//     "UPDATE users SET ? WHERE id = ?",
//     [userPropsToUpdate, userId],
//     (err) => {
//       // Once the DB operation is over, we can respond to the HTTP request
//       if (err) {
//         console.log(err);
//         res.status(500).send("Error updating a user");
//       } else {
//         res.status(200).send("User updated successfully 🎉");
//       }
//     }
//   );
// });

// // DELETE A USER in USER

// app.delete("/api/users/:id", (req, res) => {
//   const userId = req.params.id;
//   connection.query(
//     "DELETE FROM users WHERE id =?",
//     [userId],
//     (err, results) => {
//       if (err) {
//         console.log(err);
//         res.status(500).send("Error deleting an user");
//       } else {
//         res.status(200).send("User deleted!");
//       }
//     }
//   );
// });

const cocktails = [
  //   {
  //     id: 0,
  //     name: "Margarita",
  //   },
  //   {
  //     id: 1,
  //     name: "Mojito",
  //   },
  //   {
  //     id: 2,
  //     name: "Cuba Libre",
  //   },
  // ];
  // // We create a route for '/cocktails'
  // app.get("/cocktails", (request, response) => {
  //   // we send back a 200 status and the cocktail in a JSON format
  //   response.status(200).json(cocktails);
  // })
];
