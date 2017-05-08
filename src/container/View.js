import { connect } from 'react-redux'
import View from '../components/View'
import { setViewImage, setViewVideo } from '../actions'

const mapStateToProps = (state, props) => {
  return {
    ...state.view
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    setViewImage(image) {
      dispatch(setViewImage(image))
    },
    setViewVideo(video) {
      dispatch(setViewVideo(video))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View)
