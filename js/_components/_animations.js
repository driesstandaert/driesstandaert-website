var chopstickAnimations = function()
{
    $('.js-paperstack').hover(function (e) {
         $('.js-paperstack').addClass('animated wobble')
         .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
             $(this).removeClass('animated wobble');
         });
     });
};
