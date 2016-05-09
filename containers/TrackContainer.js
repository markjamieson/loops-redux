import { connect } from 'react-redux'
import Track from '../components/Track'
import {toggleNote} from '../actions'

const mapStateToProps = (state, ownProps) => {
  const {id, audioFile, notes} = state.composition.tracks.find(track => track.id === ownProps.id)
  return {
    id,
    audioFile,
    notes,
    timeSignature: state.composition.timeSignature,
    numMeasures: state.composition.numMeasures
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onNoteClick: (noteIndex) => {
      dispatch(toggleNote(ownProps.id, noteIndex))
    }
  }
}

const TrackContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Track)

export default TrackContainer