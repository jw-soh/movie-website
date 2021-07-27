$(document).ready(function() { 
  if (document.querySelector(' .navbar-buttons > .btn ')) {
    const movieBookingForm = document.querySelector(' .movie-booking-form ');
    const movieBookingButton = document.querySelector(' .navbar-buttons > .btn ');
  
    movieBookingButton.addEventListener('click', () => {
      movieBookingForm.classList.toggle('disappear');
    })
  }
}); //end ready 