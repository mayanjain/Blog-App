import mongoose from "mongoose"

const Connection = async(USERNAME,PASSWORD) =>{
    const URL = `mongodb://${USERNAME}:${PASSWORD}@blog-app-shard-00-00.ifudz.mongodb.net:27017,blog-app-shard-00-01.ifudz.mongodb.net:27017,blog-app-shard-00-02.ifudz.mongodb.net:27017/?ssl=true&replicaSet=atlas-2af3hz-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL,{ useNewUrlParser: true });
        console.log("Database connected successfully");
    } catch (error){
        console.log("Error while connecting database ",error);
    }
}

export default Connection;