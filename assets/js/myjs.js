$(document).ready(function() {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


        $("button#showPwd").click(function(e) {
        $(this).html("Clicked");
        let encPwd = $("#exampleInputPassword1").val();
        let mySpan = $("#clearPassword");
        
        console.log(encPwd);    //debug
        mySpan.text(encPwd);
    
        })

        $("button#verifyEmail").click(function(e) {
            let email = $("#exampleInputEmail1").val();
            return emailPattern.test(email);
        })
    })