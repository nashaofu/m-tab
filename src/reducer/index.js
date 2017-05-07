const bg = (state = {
  bg: {
    image: null,
    video: null
  }
}, action) => {
  switch (action.type) {
    case 'SET_BG':
      return {
        bg: action.bg
      }
    default:
      return state
  }
}

export default bg
