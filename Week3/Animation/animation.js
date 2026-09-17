$(document).ready(function() {

    $("#start-animation").click(function() {

        let areaWidth = $("#animation-area").width();
        let areaHeight = $("#animation-area").height();

        let boxWidth = $("#box").outerWidth();
        let boxHeight = $("#box").outerHeight();

        let rightPosition = areaWidth - boxWidth;
        let bottomPosition = areaHeight - boxHeight;

        $("#box")
            // Top left to bottom left
            .animate({
                top: bottomPosition,
                left: 0
            }, 1000)
            .queue(function(next) {
                $(this).css("background-color", "#3498db");
                next();
            })

            // Bottom left to bottom right
            .animate({
                top: bottomPosition,
                left: rightPosition
            }, 1000)
            .queue(function(next) {
                $(this).css("background-color", "#2ecc71");
                next();
            })

            // Bottom right to top right
            .animate({
                top: 0,
                left: rightPosition
            }, 1000)
            .queue(function(next) {
                $(this).css("background-color", "#f39c12");
                next();
            })

            // Top right to top left
            .animate({
                top: 0,
                left: 0
            }, 1000)
            .queue(function(next) {
                $(this).css("background-color", "#9b59b6");
                next();
            });

    });

});