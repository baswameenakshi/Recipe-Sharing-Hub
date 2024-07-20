import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect("mongodb+srv://baswameenakshi:1234@cluster0.bn7hunf.mongodb.net/recipes?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
 )
 .then(()=>{
    console.log("Connected to MongoDB Successfully")
 })
.catch((err)=>console.log(err))

const port = 3001;
app.listen(port, () => console.log(`Server started on port ${port}`));
