import express from "express";
import { User } from "../server.js";
const router = express.Router();

  router.post("/", (req, res) => {
    const email = req.body.data;
    // console.log(req.body.data);
  User.findOne({ email: email }, function (err, found) {
    if (!err) {
      if (found) {
        if (email === found.email);
        res.send(found);
      }
    }
  });
})


export default router;
