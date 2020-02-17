const majorKeys = document.querySelectorAll(".major-keys .key")
const chordButtons = document.querySelectorAll(".chord-select")

const notes = {
  C: 0,
  D: 1,
  E: 2
}

function displayChord(chord) {

  // Chord tabs functionality
  console.log(chord)
  majorKeys[0].classList.add('pressed')
  majorKeys[2].classList.add('pressed')
  majorKeys[4].classList.add('pressed')

}

const playKey = (event) => {
  // TODO: Mark a todo as completed and
  console.log("key clicked!")
  displayChord(event.innerText)
  // return event.classList.toggle('completed');
};

chordButtons.forEach(note => {
  note.addEventListener('click', (event) => playKey(event.currentTarget))
});

// majorKeys.forEach(note => {
//   note.addEventListener('click', (event) => playKey(event.currentTarget))
// });
  // majorKeys[0].classList.add('pressed')
