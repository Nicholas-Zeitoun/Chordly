function openTab(evt, chordName) {

  // Chord tabs functionality
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(chordName).style.display = "block";
  evt.currentTarget.className += " active";

  // Opens the first tab
  // const soundPlay = document.querySelectorAll("button");
  // soundPlay[7].click();

  // changing the key colours
  // const majorKeys = document.querySelectorAll(".major-keys .key")
  // majorKeys[0].classList.add('pressed')
}

