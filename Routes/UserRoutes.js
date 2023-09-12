const router = require('express').Router();
const asyncHandler =require('express-async-handler');
const userModel =require('../Models/UserModel');

const {dayOfTheWeek} = require('../Utils/helper');
const UserModel = require('../Models/UserModel');

router.get("/" ,asyncHandler(async(req,res) =>{
    const slackName = req.query['slack_name'];
    const track = req.query['track'];
    const parts = new Date().toISOString().split(".");

    const UTC_time = parts[0] + "Z"

    const getDayToday = new Date().getUTCDay()
    const day = dayOfTheWeek(getDayToday)
    const github_file_url = 'https://github.com/ogum-kevin/HngBackend/blob/main/server.js'
    const github_repo_url = 'https://github.com/ogum-kevin/HngxBackend'

    res.json({
        slack_name: slackName,
        current_day: day,
        utc_time: UTC_time,
        track: track,
        github_file_url: github_file_url,
        github_repo_url: github_repo_url,
        status_code: 200
    })
    //console.log('I have been triggered')
    // console.log(UTC_time);
    // console.log(day);
}))

router.post("/",asyncHandler(async(req,res) =>{
    let user_name= req.query.user_name;
    let user_email = req.query.user_email;
    let user_id = Math.floor(Math.random() *10000);

    
    const UserExists = await UserModel.findOne({
        userEmail:user_email
    })

    if (UserExists) {
        //Error message 'the user already exist please login
        res.status(400);
        throw new Error('User already exists')
    }

    const user= await UserModel.create({

        id:user_id,
        userEmail:user_email,
        userName:user_name
    })
    const message= 'Request successful'
    const statusCode= 200;

    if(user){
        res.status(200).json({
            message,
            statusCode
        }
            
        )
    }
}))

router.patch("/:id",asyncHandler(async(req,res) =>{
    const user_id= req.params['id'];
     const UserExists = await UserModel.findOne({
         user_id
     })
     if (UserExists) {
        console.log('User can be patched')
     }

     if(!UserExists){
        res.status(400);
        throw new Error('User  of that ID does not  exist')
     }
}))

router.delete('/',asyncHandler(async(req,res) =>{
    console.log('delete')
}))

module.exports =router;