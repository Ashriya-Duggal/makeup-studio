import express from "express";
import { User } from "../server.js";
const router = express.Router();

router.post("/", (req, res) => {
  const email = req.body.data;

  User.findOneAndDelete(
    { email: email },
    function (err, doc) {
      if (err) {
        console.log(err) ;
      } else {
        res.send("deleted successfully");
      }
    }
  );
});

export default router;
