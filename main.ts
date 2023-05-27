radio.onReceivedNumber(function (receivedNumber) {
    aqi = receivedNumber
})
let aqi = 0
basic.clearScreen()
radio.setGroup(11)
basic.showIcon(IconNames.Happy)
radio.setTransmitPower(7)
basic.forever(function () {
    basic.showNumber(aqi)
})
