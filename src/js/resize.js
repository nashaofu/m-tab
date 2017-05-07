let resizeListener = []

window.addEventListener('resize', function (e) {
  resizeListener.forEach(item => {
    if (typeof item.callback === 'function') {
      item.callback(e)
    }
  })
})

// 添加事件
export function addResizeListener(callback) {
  if (typeof callback !== 'function') {
    throw new TypeError('callback is not Function')
  }
  resizeListener.push({
    name: callback.name || callback.toString(),
    callback: callback
  })
}

// 移出事件
export function removeResizeListener(callback) {
  if (typeof callback !== 'function') {
    throw new TypeError('callback is not Function')
  }
  resizeListener = resizeListener.filter(item => {
    const name = callback.name || callback.toString()
    if (item.name !== name) {
      return true
    }
    return false
  })
}
