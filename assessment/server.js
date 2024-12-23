import { MeetingsRoute, UsersRoute } from './routes/index.js';

import express from 'express';

const APP = express();

const PORT = 8000


APP.use(express.json());

APP.use("/meetings", MeetingsRoute)
APP.use("/users", UsersRoute)


APP.listen(PORT, (error) =>{
    if(!error){
        console.log(`Server running on PORT:${PORT}🚀`);
    }else 
        console.log("Error occurred, server can't start", error);
    }
);