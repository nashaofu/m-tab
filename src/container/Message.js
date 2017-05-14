import { connect } from 'react-redux'
import Message from '../components/Message'
import { setMessage } from '../actions'

const mapStateToProps = (state, props) => {
  return state.message
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    close() {
      dispatch(setMessage({
        open: false,
        message: ''
      }))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message)
