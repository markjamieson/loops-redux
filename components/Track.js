import React from 'react'

const renderNotes = (measure, notes, timeSignature, onNoteClick) => {
  let result = [];
  for (let i=0; i<timeSignature[0]; i++){
    let noteIndex = measure*timeSignature[0] + i;
    let className = "Composition--Track--Note btn "
    className += notes[noteIndex] === 0?'btn-danger':'btn-success'
    result.push(
      <button className={className} key={i} onClick={() => onNoteClick(noteIndex)} />
    )
  }
  return result
}

const renderMeasures = (numMeasures, notes, timeSignature, onNoteClick) => {
  let result = [];
  for (let i=0; i<numMeasures; i++){
    result.push(
      <span key={i} className="Composition--Track--Measure">
        {renderNotes(i, notes, timeSignature, onNoteClick)}
      </span>
    )
  }
  return result
}

const Track = ({id, audioFile, notes, timeSignature, numMeasures, onNoteClick}) => {
  return (
    <div>{renderMeasures(numMeasures, notes, timeSignature, onNoteClick)}</div>
  )
}

export default Track