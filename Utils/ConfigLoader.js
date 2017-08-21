function ConfigLoader() {
    PrintLogMessage("ConfigLoader", "ConfigLoader", "Init config loader", LOG_LEVEL_INFO);
    this.LoadConfigFile()
}

ConfigLoader.prototype.LoadConfigFile = function () {
    PrintLogMessage("ConfigLoader", "LoadConfigFile", "load config file", LOG_LEVEL_INFO);
}

ConfigLoader.prototype.ParseConfigFile = function () {
    PrintLogMessage("ConfigLoader", "ParseConfigFile", "parse config file", LOG_LEVEL_INFO);
}

ConfigLoader.prototype.GetIndexOfConfigData = function (key) {
    PrintLogMessage("ConfigLoader", "GetIndexOfConfigData", "get index of data > key: " + key , LOG_LEVEL_INFO);
}

ConfigLoader.prototype.GetAllConfigData = function () {
    PrintLogMessage("ConfigLoader", "GetAllConfigData", "get all data", LOG_LEVEL_INFO);
}