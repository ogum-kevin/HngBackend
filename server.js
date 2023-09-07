require('dotenv').config()
const express = require('express')
const app = express()



/* Helper function */

function dayOfTheWeek(day) {
    const days = ['Sunday', 'Monday', "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[day]
}

/* */

app.get('/api',async(req,res) =>{
    const slackName = req.query['slack_name'];
    const  track = req.query['track'];
    const UTC_time = new Date().toISOString();
    const getDayToday = new Date().getUTCDay()
    const day =dayOfTheWeek(getDayToday)
    const github_file_url =''
    const github_repo_url = 'https://github.com/ogum-kevin/HngxBackend'

    res.json({
        slack_name:slackName,
        current_day:day,
        utc_time:UTC_time,
        track:track,
        github_file_url:github_file_url,
        github_repo_url:github_repo_url,
        status_code:200
    })
    //console.log('I have been triggered')
    // console.log(UTC_time);
   // console.log(day);
})

const PORT= process.env.PORT || 3000


app.listen(PORT,()=>{
    console.log('Hello👋');
})
