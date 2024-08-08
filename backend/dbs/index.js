import mongoose from 'mongoose';

const dbConnection = async function(){
    const dbUrl = process.env.DB_URL;
    
    try {
        await mongoose.connect(`${dbUrl}/test`);
        console.log("Successfully connected to DB");
    } catch (error) {
        console.log('Error in db connection', error);
        
    }
}

export default dbConnection;