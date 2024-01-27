const cron = require('node-cron');
const Users =require("../api/models/user")
const axios =require("axios")
//Backup.dbAutoBackUp();
//meetingsCron.refreshSystemAuth();
//Runs every minute
cron.schedule('59 * * * * *',async()=>{
    let users=await Users.find()
     let server=await axios.get("https://hotel-management-server.onrender.com/test")
     await axios.get("https://hotel-management-le7x.onrender.com/")

    console.log("all usrs",users.length,server.data)
 });

//Runs every hour
//cron.schedule('0 0 */1 * * *', () => Backup.dbAutoBackUp());
