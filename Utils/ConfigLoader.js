function ConfigLoader() {
    PrintLogMessage("ConfigLoader", "ConfigLoader", "Init config loader", LOG_LEVEL_INFO);
    this.configFileText = ""
    this.configDict = {}
    this.LoadConfigFile(this)
}

ConfigLoader.prototype.LoadConfigFile = function (configFileLoaderManager) {
    PrintLogMessage("ConfigLoader", "LoadConfigFile", "load config file", LOG_LEVEL_INFO);
    var configInfoCrawler = new XMLHttpRequest();
    configInfoCrawler.open('GET', PHP_DESTINATION + '/config.txt');
    configInfoCrawler.onreadystatechange = function() {
        PrintLogMessage("ConfigLoader", "LoadConfigFile", "responsed get config file text", LOG_LEVEL_INFO);
        this.configFileText = configInfoCrawler.responseText
        configFileLoaderManager.ParseConfigFile(this.configFileText)
    }
    configInfoCrawler.send();
    PrintLogMessage("ConfigLoader", "LoadConfigFile", "request get config file text", LOG_LEVEL_INFO);
}

ConfigLoader.prototype.ParseConfigFile = function (configFileText) {
    PrintLogMessage("ConfigLoader", "ParseConfigFile", "parse config file: " + configFileText, LOG_LEVEL_INFO);

    this.configDict = {}

    splitedMessage = configFileText.split("\n")
    for(indexOfMessageNumber in splitedMessage) {
        indexOfData = splitedMessage[indexOfMessageNumber]

        keyValueData = indexOfData.split("=")
        this.configDict[keyValueData[0]] = keyValueData[1]
        PrintLogMessage("ConfigLoader", "ParseConfigFile", "parsed key: " + keyValueData[0] + " value: " + keyValueData[1], LOG_LEVEL_INFO)
    }
}

ConfigLoader.prototype.GetIndexOfConfigData = function (key) {
    PrintLogMessage("ConfigLoader", "GetIndexOfConfigData", "get index of data > key: " + key , LOG_LEVEL_INFO);

    try {
        PrintLogMessage("ConfigLoader", "GetIndexOfConfigData", "get data key: " + key + " value: " + this.configDict[key], LOG_LEVEL_INFO)
        return this.configDict[key]
    }
    catch (except) {
        PrintLogMessage("ConfigLoader", "GetIndexOfConfigData", "some problem while crawl data, it will return NOT_AVAILABLE", LOG_LEVEL_ERROR)
        return NOT_AVAILABLE
    }
}

ConfigLoader.prototype.GetAllConfigData = function () {
    PrintLogMessage("ConfigLoader", "GetAllConfigData", "get all data", LOG_LEVEL_INFO);

    try {
        return this.configDict
    }
    catch (except) {
        PrintLogMessage("ConfigLoader", "GetAllConfigData", "some problem while crawl data, it will return NOT_AVAILABLE", LOG_LEVEL_ERROR)
        return NOT_AVAILABLE
    }
}