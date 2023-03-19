import express from "express";
import { User } from "../server.js";
import bcrypt from "bcrypt";

const router = express.Router();
router.post("/", (req, res) => {
  const { email, password } = req.body.data;
  User.findOne({ email: email }, function (err, found) {
    if (!err) {
      if (found) {
        bcrypt.compare(password, found.password, function (err, result) {
          if (result) {
            if (email === found.email) {
              res.send("matched");
            }
          }
        });
      } else {
        res.send("true");
      }
    }
  });
});
export default router;
