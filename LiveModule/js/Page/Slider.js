function onPressNavMenu(i) {
    if (i == 3) {
        openNav()
    }
    else
    {
        closeNav()
    }
}

function openNav() {
    $("#dropnav").addClass('open');
}
function closeNav() {
    $("#dropnav").removeClass('open');
}