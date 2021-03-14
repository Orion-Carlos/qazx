let watermark = {}

let setWatermark = (str) => {
  let id = '1.23452384164.123412415'

  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id))
  }
  // 获取输入内容的宽度
  let result = 10;
  let ele = document.createElement('span')
  ele.textContent = str;
  ele.style.fontSize = "10px"; 
  document.documentElement.appendChild(ele);
  result =  ele.offsetWidth;
  document.documentElement.removeChild(ele);
  // alert(result)
  // 创建canvas标签
  let can = document.createElement('canvas')
  can.width = result + 20  //canvas的宽度
  can.height = 80   //canvas的宽度

  let cans = can.getContext('2d')
  cans.rotate(-10 * Math.PI / 180)
  cans.font = '10px Vedana'
  cans.fillStyle = 'rgba(0, 0, 0, 0.2)'
  cans.textAlign = 'left'
  cans.textBaseline = 'Middle'
  cans.fillText(str, can.width / 50, can.height)

  let div = document.createElement('div')
  div.id = id
  div.style.pointerEvents = 'none'
  div.style.top = '3px'
  div.style.left = '0px'
  div.style.position = 'fixed'
  div.style.zIndex = '100000'
  div.style.width = document.documentElement.clientWidth + 'px'
  div.style.height = document.documentElement.clientHeight + 'px'
  div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat'
  document.body.appendChild(div)
  return id
}

// 该方法只允许调用一次
watermark.set = (str) => {
  let id = setWatermark(str)
  setInterval(() => {
    if (document.getElementById(id) === null) {
      id = setWatermark(str)
    }
  }, 2000)
  window.onresize = () => {
    setWatermark(str)
  }
}

export default watermark