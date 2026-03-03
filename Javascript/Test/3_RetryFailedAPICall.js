// Retry Failed API Call
// In automation testing, API calls sometimes fail due to network issues. Write a JavaScript program that simulates retrying a failed API call using a do...while loop. The program should retry a maximum of 5 times. Simulate random success/failure using Math.random() (40% chance of success: randomValue > 0.6). Log each attempt and print the final result.
// Input:
// MAX_ATTEMPTS = 5
// Output:
// Attempt 1: ❌ FAILED (Timeout/Error) Attempt 2: ✅ SUCCESS (Response 200 OK) API call PASSED after 2 attempt(s).
retryFailedAPICall();
function retryFailedAPICall(){
    
    let attempt =1;
    do{
        let result = Math.random() > 0.6 ? "FAILED (Timeout/Error)" : "SUCCESS (Response 200 OK)";
        console.log("Attempt "+attempt+ " "+result)
        if(result == "SUCCESS (Response 200 OK)") {
            console.log("API call PASSED after "+attempt+" attempt(s).")
            break;
        }
        attempt++;
    }while(attempt<=5);
}