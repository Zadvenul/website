const newWindow = window.open("https://www.roblox.com/game-pass/1255669814/Gamepass", "_blank")

newWindow.onload = function() {
    newWindow.document.getElementsByClassName('action-button')[0].querySelector('button').click()
}