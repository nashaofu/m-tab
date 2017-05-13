const ACTION_TYPES = {
  SET_VIEW_IMAGE: 'image',
  SET_VIEW_VIDEO: 'video',
  SET_VIEW_AUTOPLAY: 'autoplay',
  SET_VIEW_STATUS: 'status'
}

export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_VIEW':
      const { image, video, status } = action.view
      return {
        ...state,
        image,
        video,
        status
      }
    case 'SET_VIEW_IMAGE':
    case 'SET_VIEW_VIDEO':
    case 'SET_VIEW_AUTOPLAY':
    case 'SET_VIEW_STATUS':
      const key = ACTION_TYPES[action.type]
      if (typeof key !== 'string') {
        throw new Error('Expected key to be a string.')
      }
      return {
        ...state,
        [key]: action[key]
      }
    default:
      return state
  }
}
