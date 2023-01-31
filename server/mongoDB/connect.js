import mongoose from "mongoose";

const connectDB = async (url) =>{
    
    mongoose.connect(url)
    .then(()=>{
        console.log("MonogoDB connected");
    }).catch((err)=>{
        console.log(err);
    })
}

export default connectDB;