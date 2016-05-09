import { connect } from 'react-redux'
import Player from '../components/Player'

const mapStateToProps = (state) => {
  return {
    tracks: state.composition.tracks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const PlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)

export default PlayerContainer