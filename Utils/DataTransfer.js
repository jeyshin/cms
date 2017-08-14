function DataTransferManager() {

}

DataTransferManager.prototype.CustomJsonToOriginalJson = function (customJsonData) {
    
} 

DataTransferManager.prototype.CommunicateWithBackend = function (url, originalJsonRequestData, callbackReciveObject) {
    
}

DataTransferManager.prototype.JsonToGetParameters = function (originalJsonRequestData) {
    var getParameters = ""

    for (key in originalJsonRequestData) {
        if (originalJsonRequestData.hasOwnProperty(key)) {
            getParameters = getParameters + key + "=" + originalJsonRequestData[key] + "&"
        }
        else {
            PrintLogMessage("DataTransfer", "JsonToGetParameters", "not available key", LOG_LEVEL_WARN)
        }
    }
    PrintLogMessage("DataTransfer", "JsonToGetParameters", "converted get: " + getParameters, LOG_LEVEL_INFO)
    return getParameters
}