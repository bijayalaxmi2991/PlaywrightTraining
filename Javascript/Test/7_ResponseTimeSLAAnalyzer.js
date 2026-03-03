// As a performance tester, you collect API response times in milliseconds. Write a JavaScript program using a while loop that analyzes an array of response times and prints a performance report with min, max, average, and how many responses breached the SLA threshold (> 500ms). Use comparison operators for min/max tracking.
// Input:
// responseTimes = [120, 230, 450, 510, 180, 620], SLA_LIMIT = 500
// Output:
// Total Requests: 6 Min Response: 120ms Max Response: 620ms SLA Breaches: 2 (33.33%) Overall Status: ❌ SLA VIOLATED

var responseTimes = [120, 230, 450, 510, 180, 620], SLA_LIMIT = 500;
calculateResponseTimeSLA();
function calculateResponseTimeSLA(){

    let a=0, sum=0, min=responseTimes[0],max=responseTimes[0], slaBreachs = 0;
    while(a<responseTimes.length){
        let time = responseTimes[a];
         sum += time;
         if(time<min) min = time;
         if(time>max) max = time;
         if(time>500) slaBreachs++;
         a++;
    }

    let brachesPer = slaBreachs/responseTimes.length*100;
    console.log("Total Requests: "+ responseTimes.length);
    console.log("Min Response: "+min+"ms");
    console.log("Max Response: "+max+"ms");
    console.log("SLA Breaches: "+slaBreachs+" ("+brachesPer+"%)");


}