input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    led.plotBarGraph(
    pins.analogReadPin(AnalogPin.P0),
    1023
    )
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
    led.plotBarGraph(
    input.temperature(),
    50
    )
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("A=energia luminosa")
    basic.showString("B=energia termica")
    basic.showString("A+B=energia elettrica")
})
basic.showString("Logo=info")
