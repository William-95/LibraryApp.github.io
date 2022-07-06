let libro = '';
let submit = document.getElementById('submit');


function go() {
  location.href = 'book.html';

}


submit.onclick = function() {
  let apiKey = "";
  let book = document.getElementById('ricerca').value;

  //REQUEST FOR subjects
  var uri = 'https://openlibrary.org/subjects/' + book + '.json'

  var request1 = new XMLHttpRequest();

  request1.open('GET', uri, true);

  request1.onload = function() {
    var data = JSON.parse(this.response);
        console.log(data);
    var list = data.works;

    for (var i = 0; i < list.length; i++) {
      if (list[i]) {
    //    console.log(list[i]);
        let div = document.createElement("div");
        div.classList.add('libro');
        var libro = document.getElementById('ris');
        libro.appendChild(div);


        div.innerHTML =

          '<h2>' + list[i].title + '</h2>' +
          '<br>' +

          '<img src="https://covers.openlibrary.org/b/id/' + list[i].cover_id + '-M.jpg" />' +

          '<br>' +
          '<h3>Autore: ' + list[i].authors[0].name + '</h3>' +
          '<br>' +
          //'<a href="book.html"><button type="button" class="btn-more" id="details"> Dettagli</button></a> '


          '<INPUT onclick="go()" type=button value="Dettagli" class="btn-more" id="details">';
          var details=document.getElementById('details');
          details.onclick=function(){
            let authors = document.getElementById('authors');
            authors.innerHTML='ciao';
          }
      }


    }


  }





  //REQUEST FOR TITLE


  //  var url = 'http://openlibrary.org/search.json?q=' + book;

  //  var request = new XMLHttpRequest();

  //  request.open('GET', url, true);

  //  request.onload = function() {
  //    var data = JSON.parse(this.response);
  //    console.log(data);
  //    var list = data.docs



  //    for (var i = 0; i < list.length; i++) {
  //      if (list[i]) {


  //        let div = document.createElement("div");
  //        div.classList.add('libro');
  //        var libro = document.getElementById('ris');
  //        libro.appendChild(div);
  //        let img = list[i].isbn[0];
  //        div.innerHTML =

  //          '<h2>' + list[i].title + '</h2>' +
  //          '<br>' +

  //          '<img src="https://covers.openlibrary.org/b/isbn/' + img + '-M.jpg" />' +

  //          '<br>' +
  //          '<h3>Autore: ' + list[i].author_name + '</h3>' +
  //          '<br>' +
  //          '<a href="book.html"><button class="btn-more"> Dettagli</button></a> '
  //' Prima pubblicazione: ' + list[i].first_publish_year +
  //  '<br>' +
  //    'Numero di pagine: ' + list[i].number_of_pages_median +
  //    '<br>' +
  //    'Trama: ' + list[i].first_sentence



  //      }
  //    }
  //  }
  //  request.send();
    request1.send();
    ////LIBRO

     var details=document.getElementById('details');
     details.onclick=function(){
       let authors = document.getElementById('authors');
       authors.innerHTML='ciao';
     }
    var url = 'https://openlibrary.org' + list.key + '.json';


      var request = new XMLHttpRequest();

      request.open('GET', url, true);

    request.onload = function() {

    let title = document.getElementById('ti');
    let authors = document.getElementById('authors');
    let publish = document.getElementById('publish');
    let pages = document.getElementById('pages');
    let story = document.getElementById('story');

        var dat = JSON.parse(this.response);
        console.log(dat);

    title.innerHTML = url.title
     }
      request.send();


}

let authors = document.getElementById('authors');
authors.innerHTML='ciao';



window.onerror = function(msg, url, linenumber) {
  console.log('Error message: ' + msg + '\nURL: ' + url + '\nLine Number: ' + linenumber);
  return true;
}
