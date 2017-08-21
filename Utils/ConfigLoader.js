function ConfigLoader() {
    PrintLogMessage("ConfigLoader", "ConfigLoader", "Init config loader", LOG_LEVEL_INFO);
    this.configFileText = ""
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
    PrintLogMessage("ConfigLoader", "ParseConfigFile", "parse config file", LOG_LEVEL_INFO);
    
}

ConfigLoader.prototype.GetIndexOfConfigData = function (key) {
    PrintLogMessage("ConfigLoader", "GetIndexOfConfigData", "get index of data > key: " + key , LOG_LEVEL_INFO);
}

ConfigLoader.prototype.GetAllConfigData = function () {
    PrintLogMessage("ConfigLoader", "GetAllConfigData", "get all data", LOG_LEVEL_INFO);
}