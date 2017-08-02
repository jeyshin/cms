function JpegPlayManager(jpegPlayerCanvasId) {
    try {
        this.jpegPlayerCanvas = document.getElementById(jpegPlayerCanvasId);
        this.jpegPlayerContext = this.jpegPlayerCanvas.getContext('2d');

        PrintLogMessage("JpegPlayer", "JpegPlayManager", "canvas init ok", LOG_LEVEL_INFO)
    }
    catch (except) {
        PrintLogMessage("JpegPlayer", "JpegPlayManager", "canvas init failed", LOG_LEVEL_ERROR)
    }
}

JpegPlayManager.prototype.RawDataToImage = function(rawImageData) {

    PrintLogMessage("JpegPlayer", "RawDataToImage", "Converting image", LOG_LEVEL_INFO)

    rawImageDataArray = new Uint8Array(rawImageData.data)
    convertedImage = new Image()

    convertedImage.onload = function (event) {
        PrintLogMessage("JpegPlayer", "RawDataToImage", "converted image rdy", LOG_LEVEL_INFO)
        jpegPlayer.JpegRendering(convertedImage)
    }
    convertedImage.onerror = function (event) {
        PrintLogMessage("JpegPlayer", "RawDataToImage", "converting problem: " + event, LOG_LEVEL_ERROR)
    }

    rawImageStringData = String.fromCharCode.apply(null, rawImageDataArray)
    convertedImage.src = 'data:image/bmp;base64,'+ btoa(rawImageStringData);
}

JpegPlayManager.prototype.JpegRendering = function (imageData) {
    if (imageData.width * imageData.height > ZERO) {
        PrintLogMessage("JpegPlayer", "RawDataToImage", "Draw image", LOG_LEVEL_INFO)
        jpegPlayer.jpegPlayerContext.drawImage(imageData, ZERO, ZERO, imageData.width, imageData.height)
    }
    else {
        PrintLogMessage("JpegPlayer", "RawDataToImage", "Wrong image accepted", LOG_LEVEL_WARN)
    }
}

JpegPlayManager.prototype.GetDataFromSocket = function (messageData) {
    PrintLogMessage("JpegPlayer", "GetDataFromSocket", "recv message data", LOG_LEVEL_INFO)
    this.RawDataToImage(messageData)
}