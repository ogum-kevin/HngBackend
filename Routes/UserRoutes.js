const router = require('express').Router();
const asyncHandler =require('express-async-handler');
//const userModel =require('../Models/UserModel');

const {dayOfTheWeek} = require('../Utils/helper')

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
    console.log('Post')
}))

router.patch("/",asyncHandler(async(req,res) =>{
    console.log('patch')
}))

router.delete('/',asyncHandler(async(req,res) =>{
    console.log('delete')
}))

module.exports =router;