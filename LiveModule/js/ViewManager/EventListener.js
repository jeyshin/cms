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

EventListener.prototype.OpenOrCloseMicVolume = function () {
    if(this.isMicPopUpShowing) {
        PrintLogMessage("EventListener", "OpenOrCloseMicVolume", "close mic pop up", LOG_LEVEL_INFO);
        $('#mic-option').empty()
    }
    else {
        PrintLogMessage("EventListener", "OpenOrCloseMicVolume", "open mic pop up", LOG_LEVEL_INFO);
        $('#mic-option').load('_MicVolume.html')
    }
    this.isMicPopUpShowing = !this.isMicPopUpShowing;
}

EventListener.prototype.OpenOrCloseAudioVolume = function () {
    if(this.isAudioPopUpShowing) {
        PrintLogMessage("EventListener", "OpenOrCloseAudioVolume", "close audio pop up", LOG_LEVEL_INFO);
        $('#audio-option').empty()
    }
    else {
        PrintLogMessage("EventListener", "OpenOrCloseAudioVolume", "open audio pop up", LOG_LEVEL_INFO);
        $('#audio-option').load('_AudioVolume.html')
    }
    this.isAudioPopUpShowing = !this.isAudioPopUpShowing;
}

EventListener.prototype.OpenOrClosePTZ = function () {
    if(this.isPTZPopUpShowing) {
        PrintLogMessage("EventListener", "OpenOrClosePTZ", "close ptz pop up", LOG_LEVEL_INFO);
    }
    else {
        PrintLogMessage("EventListener", "OpenOrClosePTZ", "open ptz pop up", LOG_LEVEL_INFO);
    }
    this.isPTZPopUpShowing = !this.isPTZPopUpShowing;
}

EventListener.prototype.OpenOrCloseZoom = function () {
    if(this.isZoomPopUpShowing) {
        PrintLogMessage("EventListener", "OpenOrCloseZoom", "close zoom pop up", LOG_LEVEL_INFO);
    }
    else {
        PrintLogMessage("EventListener", "OpenOrCloseZoom", "open zoom pop up", LOG_LEVEL_INFO);
    }
    this.isZoomPopUpShowing = !this.isZoomPopUpShowing;
}

EventListener.prototype.ChangeStream = function () {
    PrintLogMessage("EventListener", "ChangeStream", "update stream", LOG_LEVEL_INFO);
}

EventListener.prototype.ChangeLanguage = function (eventAcceptedTag) {
    PrintLogMessage("EventListener", "ChangeLanguage", "update language", LOG_LEVEL_INFO);

    $(eventAcceptedTag).on("click", "li", function (event) {
        selectedLanuage = $(this).text()
        PrintLogMessage("EventListener", "ChangeLanguage", "selected!" + selectedLanuage, LOG_LEVEL_INFO)
        var languageUpdateManager = new LanguageControl()
        languageUpdateManager.RequestUpdateLanguage(selectedLanuage)
    })
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