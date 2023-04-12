const nodemailer = require('nodemailer');
// Import Node Modules

// If Module Error SO Please Install Modules ,
// Enter -> npm -i             


function mail_sending(sender,receiver,subject,body){
    /*
    Function Define Mail Sending 

    */
    let mailTransporter = nodemailer.createTransport({
        // Create a Object Using auth:Email and Password  , Service : email - We are Using
        service:"gmail",
        auth:{
            user:sender,
            // Sender Email , To Email
            pass: password
            // Password : Enter Your App Password 
            // Issue in App Password Go to https://support.google.com/accounts/answer/185833?hl=en

        }
    })

    let details={
        // Send Your Detail , Like Sender , Receiver , Subject and Body
        from:sender,
        to:receiver,
        subject:subject,
        text:body
    }

    mailTransporter.sendMail(details,(err) =>{
        // This is Main Function For Sending Email 
        if (err){
            // If Any Error Occurs 
            console.log("Error occurs"+err);  
            
        }
        else{
            // If No Error , Which Means Mail has Been Send
            console.log("Mail Send");
            
        }
    })
}

let sender="sender@gmail.com" , body="Send An Email",subject="Hey! congrats Your Have Successfully Send an Email"
let receiver="recevier @gmail.com "

mail_sending(sender,password,receiver,subject,body)
