import { connect } from 'react-redux'
import Player from '../components/Player'

const mapStateToProps = (state) => {
  return {
    tracks: state.composition.tracks,
    tempo: state.composition.tempo,
    numNotes: state.composition.numMeasures * state.composition.timeSignature[0],
    isPlaying: state.player.isPlaying
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