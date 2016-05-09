import React from 'react'
import TrackContainer from '../containers/TrackContainer'

const Composition = ({tracks}) => (
  <div>
    {tracks.map(track => 
      <div key={track.id}><TrackContainer id={track.id} /></div>
    )}
  </div>
)

export default Composition