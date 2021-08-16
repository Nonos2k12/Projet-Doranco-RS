const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

// A chaque action de l'utilisateur on vérifie si le token de l'utilisateur est valide.
module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await UserModel.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

// Ici on contrôle le token que l'utilisateur nous présente lors de l'authentification, si il est absent ou incorrect, on renvoie une erreur, sinon on donne accès à l'utilisateur.
module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err);
      } else {
        next();
      }
    });
  } else {
    console.log("No token");
  }
};
