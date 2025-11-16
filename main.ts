player.onChat("w", function () {
    // 組み合わせによって挙動を変える
    player.move(FORWARD, 1)
    player.turn(TurnDirection.Left)
})
