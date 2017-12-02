var chopstickImageRotator = function()
{
    function imageTilt(e) {
  var el = $(this),
    ww = $(window).width(),
    wh = $(window).height(),

    elementW = el.width(),
    minX = el.offset().left,
    maxX = minX + elementW,
    xCenter = elementW / 2 + minX,
    xRatio,
    xDeg,
    xRotation,

    elementH = el.height(),
    minY = el.offset().top,
    maxY = minY + elementH,
    yCenter = elementH / 2 + minY,
    yRatio,
    yRotation,
    yDeg;


   // el.clone().appendTo('.image-container');
  //Check if cursor is over the image on x axis
   if (e.pageX > minX && e.pageX < maxX) {

     xRatio = (e.pageX - xCenter) / el.width();
     xRatio = xRatio.toFixed(2);

    //X Rotation amount in degrees
     xDeg = 5;
     xRotation = xRatio * 4 * xDeg;
     TweenMax.to(el, 1, {
       rotationY: xRotation
     });
   }

  // Check if cursor is over the image on y axis
  if (e.pageY > minY && e.pageY < maxY) {

    yRatio = (e.pageY - yCenter) / el.height();
    yRatio = yRatio.toFixed(2);

    //X Rotation amount in degrees
    yDeg = 5;
    yRotation = yRatio * 4 * yDeg;
    TweenMax.to(el, 1, {
      rotationX: yRotation
    });
  }
}

$('body').on('mouseenter', '.js-tilt', function(e) {
  //add the mouse move event after mouse has hover over item with a delay to smooth the transition
});

$('body').on('mousemove', '.js-tilt', imageTilt);
};
