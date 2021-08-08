const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function () {
  const movies = JSON.parse(this.responseText);
  let text = "";

  for (let movie of movies) {
    text += (
          "<div class=\"movie-gallery-card\">" +
            `<a href=\"../pages/movie-details/${movie.handler}.html\">` +
              `<img src=\"${movie.picture}\">` +
            "</a>" +
            `<h2>${movie.name} ${movie.rating}</h2>` +
            `<p>
              ${movie.genre} <br> 
              ${movie.rating} - ${movie.description} <br>
              ${movie.duration} mins <br>
              ${movie.language} mins <br>
            </p>` +
          "</div>"
          );
  }
  // After the document has loaded the movie gallery, the event listeners will be applied to individual movie gallery cards.
  
  document.querySelector(".movie-gallery").innerHTML = text;
}

xmlhttp.open("GET", "../movies.json");
xmlhttp.send();