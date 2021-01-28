input.onButtonPressed(Button.A, function () {
    if (Players_Car.get(LedSpriteProperty.X) > 0) {
        Players_Car.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (missile > 0) {
        if (Players_Car.get(LedSpriteProperty.X) == 0) {
            car0.set(LedSpriteProperty.Y, 0)
            missile += -1
            Score = Score + 1
        }
        if (Players_Car.get(LedSpriteProperty.X) == 1) {
            car1.set(LedSpriteProperty.Y, 0)
            missile += -1
            Score = Score + 1
        }
        if (Players_Car.get(LedSpriteProperty.X) == 2) {
            car2.set(LedSpriteProperty.Y, 0)
            missile += -1
            Score = Score + 1
        }
        if (Players_Car.get(LedSpriteProperty.X) == 3) {
            car3.set(LedSpriteProperty.Y, 0)
            missile += -1
            Score = Score + 1
        }
        if (Players_Car.get(LedSpriteProperty.X) == 4) {
            car4.set(LedSpriteProperty.Y, 0)
            missile += -1
            Score = Score + 1
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (Players_Car.get(LedSpriteProperty.X) < 4) {
        Players_Car.change(LedSpriteProperty.X, 1)
    }
})
let Game = false
let car4: game.LedSprite = null
let car3: game.LedSprite = null
let car2: game.LedSprite = null
let car1: game.LedSprite = null
let Score = 0
let car0: game.LedSprite = null
let missile = 0
let Players_Car: game.LedSprite = null
basic.showString("YOU" + "HAVE" + "5" + "ROCKETS")
basic.forever(function () {
    Score = 0
    Players_Car = game.createSprite(2, 4)
    Game = true
    missile = 5
    while (Game == true) {
        basic.pause(100)
    }
    game.addScore(Score)
    game.gameOver()
})
basic.forever(function () {
    basic.pause(100)
    if (Game == true) {
        car0 = game.createSprite(0, 0)
    }
    basic.pause(randint(0, 5000))
    while (Game == true) {
        if (car0.get(LedSpriteProperty.Y) == 4) {
            if (Players_Car.isTouching(car0)) {
                Game = false
            } else {
                Score = Score + 1
                car0.set(LedSpriteProperty.Y, 0)
                basic.pause(randint(0, 5000))
            }
        } else {
            car0.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    if (Game == true) {
        car1 = game.createSprite(1, 0)
    }
    basic.pause(randint(0, 5000))
    while (Game == true) {
        if (car1.get(LedSpriteProperty.Y) == 4) {
            if (Players_Car.isTouching(car1)) {
                Game = false
            } else {
                Score = Score + 1
                car1.set(LedSpriteProperty.Y, 0)
                basic.pause(randint(0, 5000))
            }
        } else {
            car1.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    if (Game == true) {
        car2 = game.createSprite(2, 0)
    }
    basic.pause(randint(0, 5000))
    while (Game == true) {
        if (car2.get(LedSpriteProperty.Y) == 4) {
            if (Players_Car.isTouching(car2)) {
                Game = false
            } else {
                Score = Score + 1
                car2.set(LedSpriteProperty.Y, 0)
                basic.pause(randint(0, 5000))
            }
        } else {
            car2.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    if (Game == true) {
        car3 = game.createSprite(3, 0)
    }
    basic.pause(randint(0, 5000))
    while (Game == true) {
        if (car3.get(LedSpriteProperty.Y) == 4) {
            if (Players_Car.isTouching(car3)) {
                Game = false
            } else {
                Score = Score + 1
                car3.set(LedSpriteProperty.Y, 0)
                basic.pause(randint(0, 5000))
            }
        } else {
            car3.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    if (Game == true) {
        car4 = game.createSprite(4, 0)
    }
    basic.pause(randint(0, 5000))
    while (Game == true) {
        if (car4.get(LedSpriteProperty.Y) == 4) {
            if (Players_Car.isTouching(car4)) {
                Game = false
            } else {
                Score = Score + 1
                car4.set(LedSpriteProperty.Y, 0)
                basic.pause(randint(0, 5000))
            }
        } else {
            car4.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
    }
})
