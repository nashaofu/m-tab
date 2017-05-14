const ACTION_TYPES = {
  SET_MESSAGE_OPEN: 'open',
  SET_MESSAGE_MESSAGE: 'message',
  SET_MESSAGE_DELAY: 'delay',
}

export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      const { open, message } = action.message
      return {
        ...state,
        open,
        message
      }
    case 'SET_MESSAGE_OPEN':
    case 'SET_MESSAGE_MESSAGE':
    case 'SET_MESSAGE_DELAY':
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
