﻿document.addEventListener('websocketCreate', function () {
    console.log("Websocket created!");
    showHideSettings(actionInfo.payload.settings);

    websocket.addEventListener('message', function (event) {
        console.log("Got message event!");

        // Received message from Stream Deck
        var jsonObj = JSON.parse(event.data);

        if (jsonObj.event === 'sendToPropertyInspector') {
            var payload = jsonObj.payload;
            showHideSettings(payload);
        }
        else if (jsonObj.event === 'didReceiveSettings') {
            var payload = jsonObj.payload;
            showHideSettings(payload.settings);
        }
    });
});

function showHideSettings(payload) {
    console.log("Show Hide Settings Called");
    setFlagSettings("none");
    if (payload['showFlag']) {
        setFlagSettings("");
    }
}

function setFlagSettings(displayValue) {
    var dvShowFlagSettings = document.getElementById('dvShowFlagSettings');
    dvShowFlagSettings.style.display = displayValue;
}

function setPostKillDelay(displayValue) {
    var dvPostKillLaunchDelay = document.getElementById('dvPostKillLaunchDelay');
    dvPostKillLaunchDelay.style.display = displayValue;
}