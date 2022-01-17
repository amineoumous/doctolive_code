

const nodemailer = require("nodemailer");
const { EMAIL, PASSWORD, MAIN_URL, SERVICE, GMAIL_SERVICE_PORT } = require("../config");
 

console.log( EMAIL, PASSWORD, MAIN_URL, SERVICE, GMAIL_SERVICE_PORT)
let transporter = nodemailer.createTransport({
    service: SERVICE, 
    host: MAIN_URL,
    port: GMAIL_SERVICE_PORT,
    auth: {
        user: EMAIL,
        pass: PASSWORD,
    },
});


exports.sendMail = async ( message ) => {
    return new Promise(
        (resolve, reject) => {
            transporter.sendMail(message, (error, data) => {
                if (error) {
                    reject({ sent: false,  error})
                } else {
                    console.log(data);
                    resolve({ sent: true,  data})
                }
            });

        })
    // await transporter.sendMail(message, (error, data) => {
    //     console.log(error, data)
    //     return { error, data}
    // });
}

exports.hiddenEmail  = (item) => {
    var parts = item.split("@"), len = parts[0].length, len1 = parts[1].length
    return item.replace(parts[0].slice(3,-1), "*".repeat(len - 2)).replace(parts[1].slice(1,-3), "*".repeat(len1 - 2));          
}

exports.generatePassword = () => {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}