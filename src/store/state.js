import image from '../images/bg.jpg'
import animate from '../js/animate.json'

const links = [
  {
    id: 1,
    title: '应用商店',
    icon: 'local_grocery_store',
    url: 'https://chrome.google.com/webstore'
  },
  {
    id: 2,
    title: '应用',
    icon: 'apps',
    url: 'chrome://apps/'
  },
  {
    id: 3,
    title: '书签',
    icon: 'bookmark',
    url: 'chrome://bookmarks/'
  },
  {
    id: 4,
    title: '历史记录',
    icon: 'history',
    url: 'chrome://history/'
  },
  {
    id: 5,
    title: '下载',
    icon: 'file_download',
    url: 'chrome://downloads/'
  },
  {
    id: 6,
    title: '搜索',
    icon: 'search',
    url: 'https://www.baidu.com'
  }
]

const message = {
  open: false,
  message: '',
  action: null,
  delay: 5000
}

export default {
  view: {
    image,
    autoplay: 10000,
    status: 'pending',
    animate
  },
  links,
  message
}
