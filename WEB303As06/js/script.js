$(document).ready(function() {
    // Accordion
    $('.accordion-section').click(function() {
        const accordion = $(this).parent();
        accordion.find('.accordion-content').not($(this).find('.accordion-content')).slideUp();
        $(this).find('.accordion-content').slideToggle();
    });

    // Tabbed Section
    $('.tab-button').click(function() {
        const target = $(this).data('target');
        $('.tab-button').removeClass('active');
        $(this).addClass('active');
        $('.tab-panel').hide();
        $('#' + target).show();
    });

    // Default tab to show on page load
    $('#tab1').show();
    $('.tab-button[data-target="tab1"]').addClass('active');
});
