import express from "express";
import { User } from "../server.js";
const router = express.Router();

router.post("/", (req, res) => {
  const email = req.body.data;

  User.findOneAndUpdate(
    { email: email },
    { $set: { date: req.body.date, time: req.body.time } },
    function (err, doc) {
      if (err) {
        throw err;
      } else {
        res.send("added");
        // console.log(email);
      }
    }
  );
});

export default router;
