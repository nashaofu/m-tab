import { connect } from 'react-redux'
import View from '../components/View'
import { setBg } from '../actions'

const mapStateToProps = (state, props) => {
  const { image, video } = state.bg
  return {
    image,
    video
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    setDefaultBg(bg) {
      dispatch(setBg(bg))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View)
