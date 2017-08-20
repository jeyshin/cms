function LanguageControl() {
    this.dataTransferManager = new DataTransferManager()
}

LanguageControl.prototype.RequestUpdateLanguage = function (selectedLanguage) {
    PrintLogMessage("LanguageControl", "RequestUpdateLanguage", "updating language: " + selectedLanguage, LOG_LEVEL_INFO);
    this.dataTransferManager.CommunicateWithBackendGet(PHP_DESTINATION + '/system/language.php', {'app': 'set', 'language': selectedLanguage}, this);
}

LanguageControl.prototype.GetResponseData = function (data) {
    PrintLogMessage("LanguageControl", "GetResponseData", "can u see me?", LOG_LEVEL_INFO)
}

LanguageControl.prototype.GetFailedResponseData = function (error) {
    PrintLogMessage("LanguageControl", "GetFailedResponseData", "response failed", LOG_LEVEL_WARN)
}