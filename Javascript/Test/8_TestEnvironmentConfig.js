// Test Environment Config
// In CI/CD pipelines, tests run against different environments. Write a JavaScript program using a switch statement that takes an environment name stored in a variable and prints the base URL, API key pattern, and timeout. Use const for fixed values and let for the assembled config. Environments: dev, staging, qa, production/prod. Each has different base URL, API key prefix, timeout, and description.
// Examples:
// Input:
// envName = "staging"
// Output:
// Environment: STAGING Base URL: https://staging-api.testingacademy.com API Key: stg_key_xxxx-xxxx Timeout: 8000ms Description: Staging - Pre-production mirror
// 💡 Explanation:The switch matches "staging" and sets the corresponding configuration values for the staging environment.


var env = 'uat';
var baseUrl = '', apiKey = '', timeout = 0, desc = '';

switch(env){
    case 'staging':
        env = 'STAGING';
        baseUrl = 'https://staging-api.testingacademy.com';
        apiKey = 'stg_key_xxxx-xxxx';
        timeout = 8000;
        desc = "Staging - Pre-production mirror";
        break;
    case 'uat':
        env = 'UAT';
        baseUrl = 'https://uat-api.testingacademy.com';
        apiKey = 'uat_key_xxxx-xxxx';
        timeout = 7000;
        desc = "UAT - Pre-production mirror";
        break;
    case 'qa':
        env = 'QA';
        baseUrl = 'https://qa-api.testingacademy.com';
        apiKey = 'qa_key_xxxx-xxxx';
        timeout = 7000;
        desc = "QA - dev-environment mirror";
        break;
    default:
        console.log("Please enter correct environment");
    
}
console.log("Environment: "+env);
console.log("Base URL: "+baseUrl);
console.log("API Key: "+apiKey);
console.log("Timeout: "+timeout);
console.log("Description: "+desc);
