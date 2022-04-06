(function () {
    "use strict"

    var y = 1

    function changeY(val) {
        y = val
        console.log(y)
    }

    window.modulo2 = changeY
})()
