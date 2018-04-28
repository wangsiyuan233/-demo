!function(){
  var duration = 20
  $('.actions').on('click', 'button', function(e){
    let $button = $(e.currentTarget) // button
    let speed = $button.attr('data-speed')
    $button.addClass('active')
      .siblings('.active').removeClass('active')
    switch(speed){
      case 'slow':
        duration = 35
        break
      case ' normal':
        duration = 20
        break
      case 'fast':
        duration = 10
        break
    }
  })
  function writeCode(prefix, code, fn){
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id
    id = setTimeout(function run(){
      n+=1
      container.innerHTML = code.substring(0,n)
      styleTag.innerHTML = code.substring(0,n)
      container.scrollTop = container.scrollHeight
      if(n < code.length){
        id = setTimeout(run, duration)
      }else{
        fn && fn.call()
      }
    }, duration)
  }
  let code = `/*
 * 送给我最爱的小维宝
 * 嘻嘻没有眼镜哦
 */
.preview{
    background: #d5f1da;
}

/*
* 第一步当然是小维宝的大脑袋啦
（+其实是寸头的【两边推平+上面留长】）
*/
.head {
border: 1px solid #666;
background: #fed8b1;
  width: 168px;
  height: 168px;
  border-radius: 50% 50% 45% 45%;
  position: absolute;
  -webkit-transform: translate(90px, 30px);
          transform: translate(90px, 30px);
  -webkit-box-shadow: 0 -25px 0 5px #935613, 0 -25px 0 5px #666;
          box-shadow: 0 -25px 0 5px #935613, 0 -25px 0 5px #666;


}
.head .eye1,
.head .eye2 {
  position: absolute;
  top: 39px;
  width: 61px;
  height: 60px;
  border: 1px solid #666;
  background: rgba(255, 255, 255, 0.8);
  -webkit-box-shadow: inset 0 0 0 27px #FFF, inset 0 0 0 35px #666;
          box-shadow: inset 0 0 0 27px #FFF, inset 0 0 0 35px #666;

}

.head .eye1:after, .head .eye1:before,
.head .eye2:after,
.head .eye2:before {
  position: absolute;
  display: block;
  content: "";
}
.head .eye1 {
  left: 16px;
  border-radius: 50% 50% 45% 45%;
}

.head .eye2 {
  left: 91px;
  border-radius: 50% 50% 48% 45%;
}

.head .eye1:before {
  width: 35px;
  height: 20px;
  border-radius: 50%;
  top: -13px;
  left: 5px;
  -webkit-transform: rotate(-25deg);
          transform: rotate(-25deg);
-webkit-box-shadow: 10px 5px 0 2.5px #fed8b1, -10px 7.5px 0 2.5px #fed8b1, 0 0 0 1px #666;
        box-shadow: 10px 5px 0 2.5px #fed8b1, -10px 7.55px 0 2.5px #fed8b1, 0 0 0 1px #666;
z-index: -1;

}
.head .eye1:after {
  width: 35px;
  height: 20px;
  -webkit-transform: rotate(30deg);
          transform: rotate(30deg);
          -webkit-box-shadow: 10px 5px 0 2.5px #fed8b1, -10px 7.5px 0 2.5px #fed8b1, 0 0 0 1px #666;
                  box-shadow: 10px 5px 0 2.5px #fed8b1, -10px 7.55px 0 2.5px #fed8b1, 0 0 0 1px #666;
z-index: -1;
  border-radius: 50%;
  bottom: -2.5px;
  left: -5px;
}



.head .eye2:before {
    width: 35px;
    height: 20px;
  -webkit-transform: rotate(25deg);
          transform: rotate(25deg);
 -webkit-box-shadow: 10px 5px 0 2.5px #fed8b1, -10px 7.5px 0 2.5px #fed8b1, 0 0 0 1px #666;
         box-shadow: 10px 5px 0 2.5px #fed8b1, -10px 7.55px 0 2.5px #fed8b1, 0 0 0 1px #666;
  z-index: -1;
  border-radius: 50%;
  top: -12.5px;
  left: 17.5px;
}

.head .eye2:after {
    width: 35px;
    height: 20px;
    border-radius: 50%;
    bottom: -2.5px;
    left: 25px;
    -webkit-transform: rotate(-30deg);
            transform: rotate(-30deg);
    -webkit-box-shadow: 10px 5px 0 2.5px #fed8b1, -10px 7.5px 0 2.5px #fed8b1, 0 0 0 1px #666;
            box-shadow: 10px 5px 0 2.5px #fed8b1, -10px 7.55px 0 2.5px #fed8b1, 0 0 0 1px #666;
    z-index: -1;
}

/*
*小维宝芍大的鼻子
*/
.head .nose {
  position: absolute;
  width: 25px;
  height: 15px;
  top: 92.5px;
  left: 72.5px;
  border-radius: 50% 40% 50% 30%;
  background: rgba(255, 0, 0, 0);
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
  border-radius: 50% 40% 50% 30%;
  -webkit-box-shadow: -5px 0 0 1px #fed8b1, 0 0 0 1px #666;
          box-shadow: -5px 0 0 1px #fed8b1, 0 0 0 1px #666;
  background: rgba(255, 0, 0, 0);
}

/*
*嘴巴！嘴巴~
*（痴呆工科生成型哈哈）
*/

.head .mouth {
  position: absolute;
  width: 30px;
  height: 12.5px;
  background: #780202;
  top: 135px;
  left: 65px;
  border-radius: 80px 80px 25px 25px;

}
.head .mouth:after {
  display: block;
  content: "";
  position: absolute;
  width: 35px;
  height: 8px;
  background: #fed8b1;
  top: 7.5px;
  left: 0;
  border-radius: 50% 50% 0 0;
  -webkit-box-shadow: inset 0 0 0 1px #000;
          box-shadow: inset 0 0 0 1px #000;
}

/*
*捏两个大耳朵
*/

.ear1,
.ear2 {
  display: block;
  position: absolute;
  content: "";
  background: #fed8b1;
  border: 1px solid #666;
  border-radius: 50%;
}

.ear1 {
  width: 39px;
  height: 32.5px;
  top: 105px;
  left: 75px;
  z-index: -1;
}

.ear2 {
    width: 39px;
    height: 32.5px;
    top: 105px;
  left: 235.5px;
  z-index: -1;
}

/*
*最后加上“CK”的T恤（辣鸡）
*/

.body {
  position: absolute;
  top: 180px;
  left: 110px;
  border-radius: 50% 50% 0 0;
  z-index: -1;
  width: 127.5px;
  height: 110px;
  background: #fdfe76;
  border: 1px solid #666;
}

/*
*喜欢我送你的【小维宝】吗
*/

`
  writeCode('',code)

}.call()
