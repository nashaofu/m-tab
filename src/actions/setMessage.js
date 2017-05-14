export const setMessage = ({ open, message }) => ({
  type: 'SET_MESSAGE',
  message: {
    open,
    message
  }
})

export const setMessageOpen = (open) => ({
  type: 'SET_MESSAGE_OPEN',
  open
})

export const setMessageMessage = (message) => ({
  type: 'SET_MESSAGE_MESSAGE',
  message
})

export const setMessageDelay = (delay) => ({
  type: 'SET_MESSAGE_DELAY',
  delay
})
