// import cron from "cron"
// import https from "https"

// const job = new cron.CronJob("*/14 * * * *" , function(){
//     https
//         .get(process.env.API_URL, (res) => {
//             if (res.statusCode === 200) console.log("GET request sent successfully");
//             else console.log("GET request failed" , res.statusCode);
//         })
//         .on("error", (e) => console.error("Error while sending request", e));
// });

// export default job;


// CRON JOB explanation:
// Cron jobs are scheduled tasks that run periodically at fixed intervals
// we want to send 1 GET request for every 14 minutes

// How to define a schedule?
// You define a schedule using a cron expression, which consists of five fields representing:

//! MINUTE, HOUR, DAY OF THE MONTH, MONTH, DAY OF THE WEEK

//? Example && Explanation
//* 14 * * * * - Every 14 minutes
//* 0 0 * * 0 - At midnight on every sunday
//* 30 3 15 * * - At 3:30AM, on the 15th of every month
//* 0 0 1 1 * - At midnight, on January 1st
//* 0 * * * * - Every hour
