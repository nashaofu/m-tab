import { connect } from 'react-redux'
import View from '../components/View'
import {
  setView,
  setViewImage,
  setViewVideo,
  setViewAutoplay,
  setViewStatus,
  setMessage
} from '../actions'

const mapStateToProps = (state, props) => {
  return state.view
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    setView(view) {
      if (typeof view === 'string') {
        view = {
          image: view,
          video: null
        }
      }
      view.status = 'pending'
      dispatch(setView(view))
    },
    setViewImage(image) {
      dispatch(setViewImage(image))
    },
    setViewVideo(video) {
      dispatch(setViewVideo(video))
    },
    setViewAutoplay(autoplay) {
      dispatch(setViewAutoplay(autoplay))
    },
    setViewStatus(status) {
      dispatch(setViewStatus(status))
    },
    setMessage(message) {
      dispatch(setMessage(message))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View)
