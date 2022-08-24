input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . . # . .
        . . . . .
        . # . . .
        . . . . .
        # . . . .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        # # # # #
        # # # # #
        . . # . .
        . . # . .
        `)
    music.playMelody("C5 B C5 A C5 G C5 F ", 120)
    music.playMelody("G C A C B C C5 C ", 120)
    music.playMelody("C5 A F D C5 A F D ", 120)
    music.playMelody("B D F E G D A C5 ", 120)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . # . .
        . . . . .
        # # # # #
        . # . # .
        . # . # .
        `)
    music.playMelody("A G F E A A A B ", 120)
    music.playMelody("B A B G B F B E ", 120)
    music.playMelody("G C A C B C C5 C ", 120)
    music.playMelody("C5 B C5 A C5 G C5 F ", 120)
})
