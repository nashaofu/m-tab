export const setView = ({ image, video }) => ({
  type: 'SET_VIEW',
  view: {
    image,
    video
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
