// Test Data Generator
// As an SDET, you frequently need to generate test data for form testing. Write a JavaScript program that generates test user data using a for loop. Each user should have a unique ID (USR-0001 format), name, email, and role (cycling through: admin, editor, viewer, tester, manager). Every 3rd user should be inactive (edge case testing). Demonstrate proper use of var (global counter), let (loop variables), and const (fixed values).
// Generate 8 users
// Output:
// USR-0001 | TestUser_1 | testuser1@testingacademy.com | admin | ACTIVE USR-0002 | TestUser_2 | testuser2@testingacademy.com | editor | ACTIVE USR-0003 | TestUser_3 | testuser3@testingacademy.com | viewer | INACTIVE

var userCounter = 1;
var noOfuser = 3;
var users = [] ;
for (let i = 0; i < noOfuser; i++) {
    let user = [];
    let userId = randomUserId();
    let fullName = randomString(8)+" "+randomString(10)
    let emailId = randomEmail();
    let role = randomRole();
    user.push(userId);
    user.push(fullName);
    user.push(emailId);
    user.push(role);
    console.log(user);
    users.push(user);
}
console.log(JSON.stringify(users));

function randomUserId() {
    let id = "USR-" + userCounter.toString().padStart(4, '0');
    userCounter++;
    return id;
}

function randomString(len) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let str = '';
    for (let i = 0; i < len; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
}

function randomNumber(len) {
    const chars = '0123456789'
    let str = '';
    for (let i = 0; i < len; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
}

function randomEmail(){
    let email = randomString(8)+"_"+randomNumber(3)+"@gmail.com";
    return email;
}

function randomRole(){
    const roles = ['admin', 'editor', 'viewer', 'tester', 'manager'];
    let role = roles[Math.floor(Math.random() * roles.length)];
    return role;
}
