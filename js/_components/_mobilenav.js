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
