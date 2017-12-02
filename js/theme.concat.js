var chopstick =
{
    // init, something like a constructor
    init: function()
    {
        chopstick.loadObject(chopstick.mobileNav, 'chopstick.mobileNav');
        chopstick.loadObject(chopstick.hide, 'chopstick.hide');
        chopstick.loadObject(chopstick.toggle, 'chopstick.toggle');
        chopstickAnchors();
        chopstickAnimations();
        chopstickImageRotator();
        chopstickBlazy();
        chopstickSound();
    },

    /**
     * This function will load an object by a given name
     *
     * If the object doesn't exist no error will be thrown
     * But if object exists but doesn't have an init method it will throw an error
     *
     * If everything is ok we'll initiate the given object
     */
    loadObject: function(obj, name)
    {
        // create object based on a name
        // var objName = window[objName];

        // check if object exists
        if(typeof obj != 'undefined') {

            // check if object has a method init
            if (typeof obj.init == 'undefined') {
                // we will throw an error so the designer / developer know there's a problem
                throw new Error('ERROR: "' + name + '" does not have an init function');

            } else {
                // everything is fine so initiate
                obj.init();
            }
        }
    }
};

// Close mobile navigation
$(function() {
       $(".js-nav-link").mousedown(function() {
           $(".js-nav").removeClass('is-visible');
           $(".js-nav-trigger").removeClass('is-active');
       });
});


$(function() {
    var options = {
        classname: 'p-nanobar',
      id: 'nanobar',
        target: document.getElementById('myDivId')
    };

    var nanobar = new Nanobar( options );

    //move bar
    nanobar.go( 30 ); // size bar 30%
    nanobar.go( 76 ); // size bar 76%

    // size bar 100% and and finish
    nanobar.go(100);
});

var chopstickAnchors = function()
{
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 27
            }, 500);
            return false;
          }
        }
      });
    });
};

var chopstickAnimations = function()
{
    $('.js-paperstack').hover(function (e) {
         $('.js-paperstack').addClass('animated wobble')
         .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
             $(this).removeClass('animated wobble');
         });
     });
};

var chopstickBlazy = function()
{
    var bLazy = new Blazy({
        selector: ".js-blazy"
        , successClass: "p-blazy--loaded"
    });
};

var hideSettings
chopstick.hide =
{
    settings:
    {
        hide: $('.js-hide')
    },

    init: function()
    {
        hideSettings = chopstick.hide.settings;
        chopstick.hide.hideContent();
    },

    hideContent: function ()
    {
        hideSettings.hide.on('click', function(e)
        {
            e.preventDefault();
            $(this).closest(hideSettings.hide).parent().addClass('is-hidden');
        });
    }
};

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

var mobileNavSettings
chopstick.mobileNav =
{
    settings:
    {
        navigation: $('.js-nav'),
        trigger: $('.js-nav-trigger'),
        social: $('.js-nav-social')
    },

    init: function()
    {
        // Initialize mobile nav settings
        mobileNavSettings = chopstick.mobileNav.settings;
        // Bind toggle events
        chopstick.mobileNav.bindUIEvents();
    },

    bindUIEvents: function()
    {
        mobileNavSettings.trigger.on('click', function() {
            chopstick.mobileNav.toggleNavigation();
        });
    },

    // build mobile nav
    toggleNavigation: function()
    {
        mobileNavSettings.navigation.toggleClass('is-visible');
        mobileNavSettings.social.toggleClass('is-hidden');
        mobileNavSettings.trigger.toggleClass('is-active');
    }
};

var chopstickSound = function()
{
    $( document ).ready(function() {
           var audio = $("#clickSound")[0];
           $(".js-sound").mousedown(function() {
               audio.play();
           });
    });
}

var toggleSettings
chopstick.toggle =
{
    settings:
    {
        showHideToggle: $('.js-show-hide')
    },

    init: function()
    {
        // Initialize toggle settings
        toggleSettings = chopstick.toggle.settings;
        // Bind toggle events
        chopstick.toggle.bindUIEvents();
    },

    bindUIEvents: function()
    {
        // Bind show hide event
        toggleSettings.showHideToggle.on('touchstart click', function(e){
            var trigger = $(this);
            // Check if action needs to be prevented
            if (trigger.data("action") == "none") {
                e.preventDefault();
            }
            chopstick.toggle.showHide(trigger.data("target-selector"));
            trigger.toggleClass('is-toggled');
        });
    },

    showHide: function(targets)
    {
        //  Toggle the 'is-hidden' class
        $(targets).toggleClass('is-hidden');
    }
};

$(window).load(function(){
    $(chopstick.init);
    AOS.init();
});
