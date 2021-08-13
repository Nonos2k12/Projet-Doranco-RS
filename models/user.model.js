const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

//Dans ce fichier, on définit un modèle de schéma pour la création d'un nouveau user dans notre BDD à l'aide de mongoose.

const userSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 55,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail], // méthode de validator permettant de s'assurer que l'adresse mail est valide.
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      minlength: 6,
    },
    picture: {
      type: String,
      default: "./uploads/profil/random-user.png",
    },
    bio: {
      type: String,
      max: 1024,
    },
    followers: {
      type: [String], // Tableau d'id des followers
    },
    following: {
      type: [String], // Tableau d'id des utilisateurs que l'on follow
    },
    likes: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

// Avant d'ajouter des données à la BDD on crypte le mot de passe à l'aide de bcrypt pour plus de sécurité.
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Ici on compare le password à l'email qui nous est passé à l'aide de bcrypt.
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
