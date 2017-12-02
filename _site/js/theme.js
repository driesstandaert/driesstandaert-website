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
