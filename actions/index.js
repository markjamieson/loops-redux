export const toggleNote = (trackId, noteId) => {
  return {
    type: 'TOGGLE_NOTE',
    trackId,
    noteId
  }
}
