import express from "express";
import registerRoute from "./routes/registerRoute.js";
import loginRoute from "./routes/loginRoute.js";
import dashboardRoute from "./routes/dashboardRoute.js";
import bookRoute from "./routes/bookRoute.js";
import deleteRoute from "./routes/deleteRoute.js";
import cors from "cors";
import mongoose from "mongoose";
mongoose.set("strictQuery", false);
const app = express();
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/loginDB");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  confirmPassword: String,
  date: String,
  time: String,
});
const User = mongoose.model("User", userSchema);

app.use(cors()); 
app.use("/login", loginRoute);
app.use("/reg", registerRoute);
app.use("/dashboard", dashboardRoute);
app.use("/book", bookRoute);
app.use("/delete", deleteRoute);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
export { User };
