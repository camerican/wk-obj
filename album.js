// we want to first define what a Photo is...
// Our Model...
// has a <file location>, <location where taken>

function Photo( file, location ) {
  this.file = file;
  this.location = location;
  // let's write a method to output an img tag, with our data
  this.toHTML = function() {
    return "<img src=\"" + this.file + "\" />";
  }
}
// var photo1 = new Photo("img/space_tiger.jpg","New York");
// var photo2 = new Photo("img/bubble_dog.jpg","Philadelphia");
// var photo3 = new Photo("img/duck.jpg","Albany");

var photos = [
  new Photo("img/space_tiger.jpg","New York"),
  new Photo("img/bubble_dog.jpg","Philadelphia"),
  new Photo("img/duck.jpg","Albany")
];

document.addEventListener("DOMContentLoaded",function(){
  var elAlbum = document.getElementById("album");
  // update #album with our photos
  // for(var i = 0; i < photos.length; i++){
  //   elAlbum.innerHTML += photos[i].toHTML();
  // }
  photos.forEach(function(photo){
    elAlbum.innerHTML += photo.toHTML();
  });
});

// var photo1 = {
//   file: "img/space_tiger.jpg",
//   location: "New York"
// }