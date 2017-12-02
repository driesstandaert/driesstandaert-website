var chopstickSound = function()
{
    $( document ).ready(function() {
           var audio = $("#clickSound")[0];
           $(".js-sound").mousedown(function() {
               audio.play();
           });
    });
}
