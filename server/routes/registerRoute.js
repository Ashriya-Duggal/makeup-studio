import express from "express";
import bcrypt from "bcrypt";
import { User } from "../server.js";
const router = express.Router();
const saltRounds = 10;

router.post("/", (req, res) => {
  const email = req.body.info.email;
  console.log(email);
  User.findOne({ email: email }, function (err, found) {
    if (found) {
      if (email === found.email) {
        res.send("Email already exists");
      }
    } else {
      bcrypt.hash(req.body.info.password, saltRounds, function (err, hash) {
        const user = new User({
          name: req.body.info.name,
          email: req.body.info.email,
          password: hash,
        });
        user.save();
        res.send("registered successfully");
      });
    }
  });
});
export default router;
