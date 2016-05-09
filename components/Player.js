import React from 'react'

const Player = React.createClass({  
  componentDidMount: function(){
    this.currentNote = 0;
    if (this.props.isPlaying){
      this.play();
    }
  },
  play: function(){
    this.interval = window.setInterval(this.advance, 1000*60/this.props.tempo);
  },
  pause: function(){
    window.clearInterval(this.interval);
  },
  stop: function(){
    this.pause();
    this.currentNote = 0;
  },
  advance: function(){
    this.props.tracks.forEach((track) => {
      if (track.notes[this.currentNote] === 1){
        let ref = this.refs['track' + track.id];
        ref.pause();
        ref.currentTime = 0;
        ref.play();
      }
    });
    this.currentNote += 1;
    if (this.currentNote === this.props.numNotes){
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