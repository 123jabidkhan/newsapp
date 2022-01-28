import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import "./db/connection.js";
import bcrypt from 'bcrypt';


const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    unique: true,
  },
  last_name: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
});


// making password secure with bcrypt

userSchema.pre("save", async function(next){

    if(this.isModified('password')){
        console.log(`current password is ${this.password}`)
        this.password = await bcrypt.hash(this.password,10);
        console.log(`After bcrypt >current password is ${this.password}`)    
    }
    next();
})

// now creating of collection
const UsersList = new mongoose.model("UserList", userSchema);

// .................................
// ...........password make sure with bcrypt algorithm.........

// const getGscript = async (password)=>{
//    const byscriptPass = await bcrypt.hash(password,10);
//    const passMatch = await bcrypt.compare('@jabid123',byscriptPass);

//    console.log('byscriptPass >>>',byscriptPass);
//    console.log('passMatch >>>',passMatch);
// }
// getGscript('@jabid123');

// .................................


const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// app.use('/',userRoutes);

// api for home page /
app.get("/", (req, res) => {
  res.status(200).send("helo from home..!!");
});

// get user register api
app.post("/register", async (req, res) => {
  try {
    const newUser = new UsersList({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      password: req.body.password,
      username: req.body.username,
      phone: req.body.phone,
    });
    const user = await newUser.save();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});


// api user login 

app.post('/login',async (req,res)=>{

    const username = req.body.username;
    const password = req.body.password;
    const result = {
        success:true,
        message:"Login successfull..!!",
    }
    try{
       const currentUser = await UsersList.findOne({username:username});
       const isMatch = await bcrypt.compare(password, currentUser.password);
       if(isMatch){
        res.status(201).json(result);
        console.log('login successfull.!');
        console.log(currentUser);
       }else{
        result.success = false;
        result.message = 'invalid username and password.!';
        res.status(404).json(result);
       }
      
    }
    catch{
        result.success = false;
        result.message = 'invalid username and password.!';
        res.status(404).json(result);
    }
   
})




// post method
// app.post('/users',async (req,res)=>{
//     try{
//         const newUser = new UsersList(req.body);
//         const user = await newUser.save();
//         res.send(user)
//     }
//     catch(err){
//         console.log(err)
//         res.send(err);
//     }
// })

// get all users list
app.get("/users", async (req, res) => {
  const users = await UsersList.find().select(
    "first_name last_name username password phone _id"
  );
  res.status(200).json({
    count: users.length,
    data: users.map((user) => {
      return {
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        password: user.password,
        phone: user.phone,
        request: {
          _id: user._id,
          url: `localhost:5000/users/` + user._id,
        },
      };
    }),
  });
//   console.log(users);
});

// get a user by id
app.get("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const singleUser = await UsersList.findById({ _id: _id });
    res.send(singleUser);
  } catch (err) {
    res.status(404).send(err);
  }
});

// update a user by id
app.patch("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateUser = await UsersList.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateUser);
  } catch (err) {
    res.status(404).send(err);
  }
});

// delete a user by id
app.delete("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteUser = await UsersList.findByIdAndDelete(_id);
    res.send(deleteUser);
  } catch (err) {
    res.status(404).send(err);
  }
});

//  url path failed
app.get("*", (req, res) => res.send("The path doesnot exist..!!try again"));

// server listi g at 5000
app.listen(port, () => {
  console.log(`app listening at ${port}`);
});
