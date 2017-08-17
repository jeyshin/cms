function EventListener() {
    this.isSideSettingMenuOpened = false
    PrintLogMessage("EventListener", "EventListener", "init view system", LOG_LEVEL_INFO)
}

EventListener.prototype.OpenOrCloseSideSettingMenu = function () {
    if(this.isSideSettingMenuOpened) {
        $('#side_setting_menu').empty()
        PrintLogMessage("EventListener", "OpenOrCloseSideSettingMenu", "close side setting menu", LOG_LEVEL_INFO)
    }
    else {
        $('#side_setting_menu').load('_SideSettingMenu.html')
        PrintLogMessage("EventListener", "OpenOrCloseSideSettingMenu", "open side setting menu", LOG_LEVEL_INFO)
    }
    this.isSideSettingMenuOpened = !this.isSideSettingMenuOpened
}