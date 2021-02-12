

$("#btn1").click(function () {
    $("#addclass").addClass("orange") //adds the class to the division
})

$("#btn2").click(function () {
    $("#addclass").removeClass("orange") //removes the class
})

$("#btn3").click(function () {
    $("#addclass").remove()
})

$("#btn4").click(function () {
    $("#addclass").empty()
})

$("#btn5").click(function () {
    $("#addclass").append("This is append text")
})

$("#btn6").click(function () {
    $("#addclass").prepend("This is prepend text")
})

$("#btn7").click(function () {
    $("#addclass").fadeOut(500,function(){
      alert("This is callback function")
    })
})

$("#btn8").click(function () {
    $("#addclass").fadeIn(5000).slideUp()
})
