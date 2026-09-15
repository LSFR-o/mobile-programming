
$(document).ready(function() {

    $("#showQR").click(function() {
        $("#qr").show();
    });

    $("#closeQR").click(function() {
        $("#qr").hide();
    });

    $("#profile").mouseenter(function() {
        $(this).css("background-color", "lightgreen");
    });

    $("#profile").mouseleave(function() {
        $(this).css("background-color", "white");
    });

});