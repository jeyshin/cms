function DataTransferManager() {

}

DataTransferManager.prototype.CustomJsonToOriginalJson = function (customJsonData) {

    PrintLogMessage("DataTransfer", "CustomJsonToOriginalJson", "preparing parse custom json data", LOG_LEVEL_INFO)
    var jsonDatas = {}

    splitedMessage = customJsonData.split("&")

    for(indexOfDataNumber in splitedMessage) {
        keyValueData = splitedMessage[indexOfDataNumber].split("=")

        key = keyValueData[0]
        value = keyValueData[1]

        jsonDatas[key] = value

        PrintLogMessage("DataTransfer", "CustomJsonToOriginalJson", "key: " + key + " value: " + value, LOG_LEVEL_INFO)
    }
    // PrintLogMessage("DataTransfer", "CustomJsonToOriginalJson", "result json: " + jsonDatas, LOG_LEVEL_INFO)
    return jsonDatas
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