import { connect } from 'react-redux'
import Grid from '../components/Grid'

const mapStateToProps = (state, props) => {
  return {
    links: state.links
  }
}

export default connect(mapStateToProps)(Grid)
