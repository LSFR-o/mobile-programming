$(document).ready(function() {

    $("#login-btn").click(function() {

        let username = $("#username").val();
        let password = $("#password").val();

        if (username == "prabhat" && password == "1234") {

            $("#login").hide();
            $("#profile").show();

        }
        else {
            $("#message").text("Invalid username or password");
        }

    });


    $("#logout-btn").click(function() {

        $("#profile").hide();
        $("#login").show();

        $("#username").val("");
        $("#password").val("");

        $("#message").text("");

    });

});