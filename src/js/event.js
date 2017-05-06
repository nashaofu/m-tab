const Listener = {}

window.addEventListener('resize', function (e) {
  Listener.resize.timer && clearTimeout(Listener.resize.timer)
  // 防止一直执行，造成运算量增加
  Listener.resize.timer = setTimeout(() => {
    Listener.resize.forEach(item => {
      if (typeof item.callback === 'function') {
        item.callback(e)
      }
    })
  }, 300)
})

// 添加事件
export function addEventListener(event, callback) {
  if (typeof callback !== 'function') {
    throw new TypeError('callback is not Function')
  }
  if (!Array.isArray(EventListener[event])) {
    Listener[event] = []
  }
  Listener[event].push({
    name: callback.name || callback.toString(),
    callback: callback
  })
}

// 移出事件
export function removeEventListener(event, callback) {
  if (typeof callback !== 'function') {
    throw new TypeError('callback is not Function')
  }
  if (!Array.isArray(EventListener[event])) {
    Listener[event] = []
  }
  Listener[event] = Listener[event].filter(item => {
    const name = callback.name || callback.toString()
    if (item.name !== name) {
      return true
    }
  })
}
