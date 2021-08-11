const mongoose = require("mongoose");

// Mongoose est une bibliothèque nous permettant de travailler beaucoup plus facilement avec mongoDB. Ici on connecte le projet à la BDD grâce à la méthode connect.

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@mern-project.98wt0.mongodb.net/mern-project",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
