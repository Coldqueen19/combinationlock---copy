let Locked = true
let Wheel1 = 0
let Wheel2 = 0
let CodepartA = 5
let CodepartB = 1
basic.forever(function () {
    if (Wheel1 == CodepartA && Wheel2 == CodepartB) {
        Locked = false
    } else if (input.buttonIsPressed(Button.A)) {
        if (Wheel1 == 9) {
            Wheel1 = 0
            basic.showString("" + Wheel1 + Wheel2)
        } else {
            Wheel1 += 1
            basic.showString("" + Wheel1 + Wheel2)
        }
    } else if (input.buttonIsPressed(Button.B)) {
        if (Wheel2 == 9) {
            Wheel2 = 0
            basic.showString("" + Wheel1 + Wheel2)
        } else {
            Wheel2 += 1
            basic.showString("" + Wheel1 + Wheel2)
        }
    } else {
    	
    }
})
