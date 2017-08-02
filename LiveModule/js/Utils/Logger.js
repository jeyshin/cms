function PrintLogMessage(className, methodName, message, logLevel) {

    logMessage = "[" + className + "] {" + methodName + "} (" + message + ")"

    if (logLevel == LOG_LEVEL_VERBOSE) {
        logMessage = "V: " + logMessage
    }
    else if (logLevel == LOG_LEVEL_INFO) {
        logMessage = "I: " + logMessage
    }
    else if (logLevel == LOG_LEVEL_DEBUG) {
        logMessage = "D: " + logMessage
    }
    else if (logLevel == LOG_LEVEL_WARN) {
        logMessage = "W: " + logMessage
    }
    else if (logLevel == LOG_LEVEL_ERROR) {
        logMessage = "E: " + logMessage
    }
    else {
        logMessage = "W: [Logger] {PrintLogMessage} (Wrong message accepted)"
    }

    logPrintDate = new Date()

    console.log(logPrintDate.getHours() + ":" + logPrintDate.getMinutes() + ":" + logPrintDate.getSeconds() + " " + logMessage)
}