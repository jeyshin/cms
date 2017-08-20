function EventListener() {
    this.isSideSettingMenuOpened = false
    this.isMicPopUpShowing = false
    this.isAudioPopUpShowing = false
    this.isPTZPopUpShowing = false
    this.isZoomPopUpShowing = false
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

EventListener.prototype.ChangeStream = function () {
    PrintLogMessage("EventListener", "ChangeStream", "update stream", LOG_LEVEL_INFO);
}

EventListener.prototype.ChangeLanguage = function () {
    PrintLogMessage("EventListener", "ChangeLanguage", "update language", LOG_LEVEL_INFO);
}

EventListener.prototype.ChangeMicVolume = function () {
    PrintLogMessage("EventListener", "ChangeMicVolume", "update mic vol", LOG_LEVEL_INFO);
}

EventListener.prototype.ChangeAudioVolume = function () {
    PrintLogMessage("EventListener", "ChangeAudioVolume", "update audio vol", LOG_LEVEL_INFO);
}

EventListener.prototype.ControlPTZ = function () {
    PrintLogMessage("EventListener", "ControlPTZ", "control ptz", LOG_LEVEL_INFO);
}

EventListener.prototype.ChangeZoomeScale = function () {
    PrintLogMessage("EventListener", "ChangeZoomeScale", "update zoom scale", LOG_LEVEL_INFO);
}