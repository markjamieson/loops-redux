const initialState = {
  tempo: 120,
  numMeasures: 4,
  timeSignature: [4, 4],
  tracks: [
    {
      id: 1,
      audioFile: "/hihat-plain.wav",
      notes: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    },
    {
      id: 2,
      audioFile: "/kick-dry.wav",
      notes: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    },
    {
      id: 3,
      audioFile: "/snare-big.wav",
      notes: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }
  ]
}

const composition = (state=initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_NOTE':
      return Object.assign({}, state, {
        tracks: state.tracks.map(t =>
          track(t, action))
      })
    default:
      return state
  }
}

const track = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_NOTE':
      if (action.trackId !== state.id){
        return state
      }
      return Object.assign({}, state, {
        notes: state.notes.map((n, index) => {
          if (action.noteId !== index){
            return n
          }
          return n===0?1:0
        })
      })
    default:
      return state
  }
}

export default composition