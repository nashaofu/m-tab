import { connect } from 'react-redux'
import Search from '../components/Search'

const mapStateToProps = (state, props) => {
  return state.search
}

export default connect(
  mapStateToProps,
  {}
)(Search)
