let libro = '';
let submit = document.getElementById('submit');

submit.onclick = function() {
  let apiKey = "";
  let book = document.getElementById('ricerca').value;
  let url = 'http://openlibrary.org/search.json?q=' + book;
  //('https://openlibrary.org/subjects/'+book+'.json')
  var request = new XMLHttpRequest();

  request.open('GET', url, true);

  request.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data);
    var list = data.docs

    for (var i = 0; i < list.length; i++) {
      if (list[i]) {
        let div = document.createElement("div");
        div.classList.add('libro');
        var libro = document.getElementById('ris');
        libro.appendChild(div);
        div.innerHTML =
          '<h2>' + list[i].title + '</h2>' +
          '<br>' +
          '<img src="https://covers.openlibrary.org/b/isbn/' + list[i].isbn[0] + '-M.jpg" />' +
          '<br>' +
          '<h3>Autore: ' + list[i].author_name +'</h3>'+
          '<br>' +
          '<button class="btn-more"> Dettagli</button> '
      //' Prima pubblicazione: ' + list[i].first_publish_year +
        //  '<br>' +
      //    'Numero di pagine: ' + list[i].number_of_pages_median +
      //    '<br>' +
      //    'Trama: ' + list[i].first_sentence


      }
    }

  }
  request.send();
}
