controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    the_prototype.follow(The_Player)
    The_Player.setVelocity(100, 50)
    The_Player.setStayInScreen(true)
    The_Player.setBounceOnWall(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    The_Player = sprites.create(assets.image`The Player`, SpriteKind.Player)
    controller.moveSprite(The_Player, 50, 100)
    The_Player.setStayInScreen(true)
})
let The_Player: Sprite = null
let the_prototype: Sprite = null
the_prototype = sprites.create(assets.image`The Prototype`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`poppy playtime`)
controller.moveSprite(the_prototype)
the_prototype.setStayInScreen(true)
