$('#btn_liveview').click(function() {
    $('#topnav').children().removeClass('active');
    $(this).toggleClass('active');
    closeNav()
})
$('#btn_playback').click(function() {
    $('#topnav').children().removeClass('active');
    $(this).toggleClass('active');
    closeNav()
})
$('#btn_setting').click(function() {
    $('#topnav').children().removeClass('active');
    $(this).toggleClass('active');
    openNav()
})
$('#btn_help').click(function() {
    $('#topnav').children().removeClass('active');
    $(this).toggleClass('active');
    closeNav()
})
function openNav() {
    $("#dropnav").addClass('open');
}
function closeNav() {
    $("#dropnav").removeClass('open');
}