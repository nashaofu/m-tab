const setViewImage = (state, action) => {
  switch (action.type) {
    case 'SET_VIEW':
      return action.view.image
    case 'SET_VIEW_IMAGE':
      return action.image
    default:
      return state
  }
}

const setViewVideo = (state, action) => {
  switch (action.type) {
    case 'SET_VIEW':
      return action.view.video
    case 'SET_VIEW_VIDEO':
      return action.video
    default:
      return state
  }
}

export default (view = {}, action) => ({
  image: setViewImage(view.image, action),
  video: setViewVideo(view.video, action)
})
