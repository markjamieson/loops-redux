import { connect } from 'react-redux'
import Composition from '../components/Composition'

const mapStateToProps = (state) => {
  return {
    tracks: state.composition.tracks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Composition)

export default App