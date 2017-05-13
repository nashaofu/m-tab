export const setView = ({ image, video, status }) => ({
  type: 'SET_VIEW',
  view: {
    image,
    video,
    status
  }
})

export const setViewImage = (image) => ({
  type: 'SET_VIEW_IMAGE',
  image
})

export const setViewVideo = (video) => ({
  type: 'SET_VIEW_VIDEO',
  video
})

export const setViewAutoplay = (autoplay) => ({
  type: 'SET_VIEW_AUTOPLAY',
  autoplay
})

export const setViewStatus = (status) => ({
  type: 'SET_VIEW_STATUS',
  status
})
