const movieNotesSection = document.getElementsByClassName('movie-notes')[0];
const moviePageLocalStorageKey = getLocalStorageKey(window.location.pathname);

document.getElementById('movie-notes-activation-button').addEventListener('click', function (e) {
  movieNotesSection.classList.add('activated');
  renderNotes();
})

document.getElementById('movie-notes-deactivation-button').addEventListener('click', function (e) {
  movieNotesSection.classList.remove('activated');
})    

document.getElementById('movie-notes-save-button').addEventListener('click', saveNotes);
document.getElementById('movie-notes-delete-button').addEventListener('click', deleteNotes);

function getLocalStorageKey(url) {
  // Each movie detail page has a unique local storage key to store movie notes, hence the need 
  // for this function.
  // E.g Disney's Jungle Cruise has key: disney-jungle-cruise
  
  const partsOfUrlPath = url.split('/');
  return partsOfUrlPath[partsOfUrlPath.length - 1].replace('.html', '');
}

function renderNotes() {
  const storedMovieNotes = localStorage.getItem(moviePageLocalStorageKey);

  if (storedMovieNotes) {
    document.getElementById('notes').value = storedMovieNotes;
  } 
}

function saveNotes(e) {
  e.preventDefault();
  localStorage.setItem(moviePageLocalStorageKey, document.getElementById('notes').value);
}

function deleteNotes(e) {
  e.preventDefault();
  document.getElementById('notes').value = "";
  localStorage.removeItem(moviePageLocalStorageKey);
}