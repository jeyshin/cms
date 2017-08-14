function LiveLightControl() {
    this.dataTransferManager = new DataTransferManager()
}

LiveLightControl.prototype.GetLiveLightData = function () {
    this.dataTransferManager.CommunicateWithBackendGet('../../live/light_control.php', {"app": "get"}, this)
}

LiveLightControl.prototype.SetLightStatusAndLevel = function (lightStatus, lightLevel) {
    this.dataTransferManager.CommunicateWithBackendGet('../../live/light_control.php',
        {"app": "set", "light_status": lightStatus, "light_level": lightLevel}, this)
}

LiveLightControl.prototype.GetResponseData = function (data) {
    PrintLogMessage("LiveLightControl", "GetResponseData", "can u see me?", LOG_LEVEL_INFO)
}

LiveLightControl.prototype.GetFailedResponseData = function (error) {
    PrintLogMessage("LiveLightControl", "GetFailedResponseData", "response failed", LOG_LEVEL_WARN)
}