function SystemInformationCrawler() {
    this.dataTransferManager = new DataTransferManager()
}

SystemInformationCrawler.prototype.GetSystemInfoRequest = function () {
    PrintLogMessage("SystemInformationCrawler", "GetSystemInfoRequest", "Send request", LOG_LEVEL_INFO)
    this.dataTransferManager.CommunicateWithBackendGet("../../system/information.php", {"app": "get"}, this)
}

SystemInformationCrawler.prototype.GetResponseData = function (data) {
    PrintLogMessage("SystemInformationCrawler", "GetResponseData", "can u see me?", LOG_LEVEL_INFO)
}

SystemInformationCrawler.prototype.GetFailedResponseData = function (error) {
    PrintLogMessage("SystemInformationCrawler", "GetFailedResponseData", "response failed", LOG_LEVEL_WARN)
}