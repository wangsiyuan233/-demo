var canvas = document.getElementById('canvasA');
var context = canvas.getContext('2d');
var lineWidth = 6

autoSetCanvasSize(canvas)
listenToUser(canvas)

var eraserEnabled = false
pen.onclick = function(){
  eraserEnabled = false
  pen.classList.add('active')
  eraser.classList.remove('active')
}
eraser.onclick = function(){
  eraserEnabled = true
  eraser.classList.add('active')
  pen.classList.remove('active')
}
clear.onclick = function(){
  context.clearRect(0, 0, canvas.width, canvas.height);
}
download.onclick = function(){
  var url = canvas.toDataURL("image/png")
  var a = document.createElement('a')
  document.body.appendChild(a)
  a.href = url
  a.download = '王思源的传奇大作！'
  a.target = '_blank'
  a.click()
}

pink.onclick = function(){
  var lineWidth = 6
  context.fillStyle = 'pink'
  context.strokeStyle = 'pink'
  pink.classList.add('active')
  green.classList.remove('active')
  purple.classList.remove('active')
}
green.onclick = function(){
  var lineWidth = 6
  context.fillStyle = 'green'
  context.strokeStyle = 'green'
  pink.classList.remove('active')
  green.classList.add('active')
  purple.classList.remove('active')
}
purple.onclick = function(){
  var lineWidth = 6
  context.fillStyle = 'purple'
  context.strokeStyle = 'purple'
  pink.classList.remove('active')
  green.classList.remove('active')
  purple.classList.add('active')
}

brush.onclick = function(){
  lineWidth = 3
  brush2.classList.remove('active')
  brush.classList.add('active')

}
brush2.onclick = function(){
  lineWidth = 9
  brush.classList.remove('active')
  brush2.classList.add('active')

}

/******/

function autoSetCanvasSize(canvas) {
  setCanvasSize()

  window.onresize = function() {
    setCanvasSize()
  }

  function setCanvasSize() {
    var pageWidth = document.documentElement.clientWidth
    var pageHeight = document.documentElement.clientHeight

    canvas.width = pageWidth
    canvas.height = pageHeight
  }
}

// function drawCircle(x, y, radius) {
//   context.beginPath()
//   context.arc(x, y, radius, 0, Math.PI * 2);
//   context.fill()
// }

function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1) // 起点
  context.lineWidth = lineWidth
  context.lineTo(x2, y2) // 终点
  context.stroke()
  context.closePath()
}

function listenToUser(canvas) {
  var using = false
  var lastPoint = {
    x: undefined,
    y: undefined
  }
  // 判断是否是触屏
  if(document.body.ontouchstart !== undefined){
    canvas.ontouchstart = function(aaa){
      var x = aaa.touches[0].clientX
      var y = aaa.touches[0].clientY
      // console.log(x,y)
      using = true
      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 40, 40)
      } else {
        lastPoint = {
          "x": x,
          "y": y
        }
      }
    }
    canvas.ontouchmove = function(aaa){
      // console.log('边摸边动')
      var x = aaa.touches[0].clientX
      var y = aaa.touches[0].clientY

      if (!using) {return}

      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 10, 10)
      } else {
        var newPoint = {
          "x": x,
          "y": y
        }
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
        lastPoint = newPoint
      }
    }

    canvas.ontouchend = function(){
      // console.log('摸完了')
      using = false
    }
  }else{
    // 非触屏设备
    canvas.onmousedown = function(aaa) {
      var x = aaa.clientX
      var y = aaa.clientY
      using = true
      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 10, 10)
      } else {
        lastPoint = {
          "x": x,
          "y": y
        }
      }
    }
    canvas.onmousemove = function(aaa) {
      var x = aaa.clientX
      var y = aaa.clientY

      if (!using) {return}

      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 10, 10)
      } else {
        var newPoint = {
          "x": x,
          "y": y
        }
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
        lastPoint = newPoint
      }

    }
    canvas.onmouseup = function(aaa) {
      using = false
    }
  }

}
