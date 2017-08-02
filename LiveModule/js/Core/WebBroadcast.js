function WebConnection(address, userName, userPassword) {
    PrintLogMessage("WebBroadcast", "WebConnection", "add: " + address + " name: " + userName + " pwd: " + userPassword, LOG_LEVEL_INFO)
    this.address = address
    this.userName = userName
    this.userPassword = userPassword
}

WebConnection.prototype.ConnectToServer = function () {
    PrintLogMessage("WebBroadcast", "ConnectToServer", "connect add: " + this.address, LOG_LEVEL_INFO)

    if (this.IsConnectionAlive() == NOT_AVAILABLE) {
        try {
            PrintLogMessage("WebBroadcast", "ConnectToServer", "Trying to connect server", LOG_LEVEL_INFO)
            this.webSocketConnection = new WebSocket(this.address, WEB_SOCKET_JPEG_STREAMING_CONNECTION)
            this.webSocketConnection.binaryType = 'arraybuffer'
            this.webSocketConnection.onerror = function (event) {
                PrintLogMessage("WebBroadcast", "onerror", "Error: " + event, LOG_LEVEL_ERROR)
                alert("No connection.")
            }

            this.webSocketConnection.onopen = function (event) {
                PrintLogMessage("WebBroadcast", "onopen", "Connection opened: " + event, LOG_LEVEL_INFO)
                webConnection.SendMessage('PLAY', jpegPlayer)
            }
        }
        catch (except) {
            PrintLogMessage("WebBroadcast", "ConnectToServer", "Error: " + except, LOG_LEVEL_ERROR)
        }
    }
    else {
        PrintLogMessage("WebBroadcast", "ConnectToServer", "connection already accepted", LOG_LEVEL_WARN)
    }
}

WebConnection.prototype.DisconnectFromServer = function () {
    PrintLogMessage("WebBroadcast", "DisconnectFromServer", "disconnect add: " + this.address, LOG_LEVEL_INFO)

    if (this.IsConnectionAlive() == AVAILABLE) {
        this.webSocketConnection.close()

        PrintLogMessage("WebBroadcast", "DisconnectFromServer", "connection closed", LOG_LEVEL_INFO)

        this.webSocketConnection.onclose = function (p1) {
            PrintLogMessage("WebBroadcast", "onclose", "Connection closed: " + p1, LOG_LEVEL_WARN)
        }
    }
    else {
        PrintLogMessage("WebBroadcast", "DisconnectFromServer", "connection already removed", LOG_LEVEL_WARN)
    }
}

WebConnection.prototype.IsConnectionAlive = function () {
    if (this.webSocketConnection) {
        return AVAILABLE
    }
    return NOT_AVAILABLE
}

WebConnection.prototype.SendMessage = function (message, recvObject) {

    PrintLogMessage("WebBroadcast", "SendMessage", "Will send message: " + message, LOG_LEVEL_INFO)

    if (this.IsConnectionAlive() == AVAILABLE) {
        this.webSocketConnection.send(message + "\r\n")
        PrintLogMessage("WebBroadcast", "SendMessage", "message sent", LOG_LEVEL_INFO)

        this.webSocketConnection.onmessage = function (p1) {
            PrintLogMessage("WebBroadcast", "onmessage", "recv message: " + p1, LOG_LEVEL_INFO)

            recvObject.GetDataFromSocket(p1)
        }
    }
    else {
        PrintLogMessage("WebBroadcast", "SendMessage", "connection refused", LOG_LEVEL_WARN)
    }
}




