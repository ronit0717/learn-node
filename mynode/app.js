const os = require('os');
const fs = require('fs');
const userData = require('./user.js'); 

let user = os.userInfo();
let date = new Date();

let message = `User "${user.username}" started APP at "${date}" WRITE. First Name: "${userData.user.firstName}"`;

console.log('writing');
if (userData.addLog()) {
    fs.appendFile('hello.txt', message, function(err){
        if(err) {
            console.log('Not able to append file');
        }
    })
}