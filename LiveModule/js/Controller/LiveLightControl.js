function LiveLightControl() {
    this.dataTransferManager = new DataTransferManager()
    this.flag = false
}

LiveLightControl.prototype.GetLiveLightData = function () {
    PrintLogMessage("LiveLightControl", "GetLiveLightData", "getting light status", LOG_LEVEL_INFO)
    this.dataTransferManager.CommunicateWithBackendGet('../../live/light_control.php', {"app": "get"}, this)
}

LiveLightControl.prototype.SetLightStatusAndLevel = function (lightStatus, lightLevel) {
    PrintLogMessage("LiveLightControl", "SetLightStatusAndLevel", "update light: " + lightStatus + " level: " + lightLevel, LOG_LEVEL_INFO)
    this.dataTransferManager.CommunicateWithBackendGet('../../live/light_control.php',
        {"app": "set", "light_status": lightStatus, "light_level": lightLevel}, this)
}

LiveLightControl.prototype.GetResponseData = function (data) {
    PrintLogMessage("LiveLightControl", "GetResponseData", "can u see me?", LOG_LEVEL_INFO)
    if(this.flag == false) {
        this.flag = true
        this.GetLiveLightData()
    }
}

LiveLightControl.prototype.GetFailedResponseData = function (error) {
    PrintLogMessage("LiveLightControl", "GetFailedResponseData", "response failed", LOG_LEVEL_WARN)
}