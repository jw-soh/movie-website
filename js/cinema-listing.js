const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function () {
  const cinemas = JSON.parse(this.responseText);
  let text = "";
  
  for (let cinema of cinemas) {
  text += (
        `<div class=\"cinema-gallery-card\" id=\"${cinema.name}\">Hi</div>` 
        );
  }
  // After the document has loaded the movie gallery, the event listeners will be applied to individual movie gallery cards.
  document.querySelector("main").innerHTML = text;
}

xmlhttp.open("GET", "../cinemas.json");
xmlhttp.send();