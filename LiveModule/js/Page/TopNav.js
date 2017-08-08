$('#btn_liveview').click(function() {
    $('#topnav').children().removeClass('active');
    $(this).toggleClass('active');

    if (typeof onPressNavMenu !== "undefined") {
        onPressNavMenu(1);
    }
})
$('#btn_playback').click(function() {
    $('#topnav').children().removeClass('active');
    $(this).toggleClass('active');

    if (typeof onPressNavMenu !== "undefined") {
        onPressNavMenu(2);
    }
})
$('#btn_setting').click(function() {
    $('#topnav').children().removeClass('active');
    $(this).toggleClass('active');

    if (typeof onPressNavMenu !== "undefined") {
        onPressNavMenu(3);
    }
})
$('#btn_help').click(function() {
    $('#topnav').children().removeClass('active');
    $(this).toggleClass('active');
    
    if (typeof onPressNavMenu !== "undefined") {
        onPressNavMenu(4);
    }
})