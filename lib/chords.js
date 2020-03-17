const majorKeys = document.querySelectorAll(".major-keys .key")
const minorKeys = document.querySelectorAll(".minor-keys .m-key")
const chordButtons = document.querySelectorAll(".chord-select")

function removeChord() {
  // Clearing the board from pressed major keys
  majorKeys.forEach(function (majorKey, index) {
    majorKey.classList.remove('pressed')
  })
  // Clearing the board from pressed minor keys
  minorKeys.forEach(function (minorKey, index) {
    minorKey.classList.remove('pressed')
  })
}

function displayChord(chord) {
  // Chord tabs functionality
  console.log(chord)
  majorNotes[chord].forEach (ind => majorKeys[ind].classList.add('pressed'))
  minorNotes[chord].forEach (ind => minorKeys[ind].classList.add('pressed'))
}

const playKey = (event) => {
  console.log("key clicked!")
  removeChord()
  displayChord(event.innerText)
};

chordButtons.forEach(note => {
  note.addEventListener('click', (event) => playKey(event.currentTarget))
});
