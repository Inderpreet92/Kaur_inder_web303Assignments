$(document).ready(function() {
    // Accordion functionality
    $('.accordion-label').click(function() {
        $(this).siblings('.accordion-content').slideToggle();
        $('.accordion-content').not($(this).siblings('.accordion-content')).slideUp();
    });

    // Tab functionality
    $('.tab-links a').click(function(e) {
        e.preventDefault();
        var tabId = $(this).attr('href');
        $('.tab-content').hide();
        $(tabId).show();
    });
});
