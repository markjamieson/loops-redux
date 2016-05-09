import React from 'react'
require ("../samples/kick-deep.wav")

const Player = React.createClass({  
  componentDidMount: function(){
    this.currentNote = 0;
    window.setInterval(this.playNextNote, 200);
  },
  playNextNote: function(){
    this.props.tracks.forEach((track) => {
      if (track.notes[this.currentNote] === 1){
        let ref = this.refs['track' + track.id];
        ref.pause();
        ref.currentTime = 0;
        ref.play();
      }
    });
    this.currentNote += 1;
    if (this.currentNote === this.props.tracks[0].notes.length){
      this.currentNote = 0;
    }
  },
  render: function(){
    return (
      <div>
        {this.props.tracks.map((track) => {
          return (
            <audio key={track.id} ref={"track" + track.id}>
              <source src={track.audioFile} type="audio/wav" />
            </audio>
          )
        })}
        
      </div>
    )
  }
})

export default Player