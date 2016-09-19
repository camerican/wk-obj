// we want to first define what a Photo is...
// Our Model...
// has a <file location>, <location where taken>

function Album(){
  this.photos = [];
  //add a new photo,
  this.addPhoto = function( file, location ) {
    //to do: finish this
    this.photos.push( new Photo(file, location) );
    return this;
  };
  //list all photos, and 
  this.listPhotos = function() {
    //to do: write the list
    var output = "";
    this.photos.forEach(function(photo){
      output += photo.file + " [" + photo.location + "],";
    });
    return output.slice(0,-1);
  };
  //access a specific photo
  this.getPhoto = function( i ) {
    //to do: return photo
  }
}

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

// var photos = [
//   new Photo("img/space_tiger.jpg","New York"),
//   new Photo("img/bubble_dog.jpg","Philadelphia"),
//   new Photo("img/duck.jpg","Albany")
// ];

var myAlbum = new Album();
// we can method chain by returning "this" from
// the method we're calling...
myAlbum.addPhoto("img/space_tiger.jpg","New York").addPhoto("img/bubble_dog.jpg","Philadelphia").addPhoto("img/duck.jpg","Albany");

document.addEventListener("DOMContentLoaded",function(){
  var elAlbum = document.getElementById("album");
  // update #album with our photos
  // for(var i = 0; i < photos.length; i++){
  //   elAlbum.innerHTML += photos[i].toHTML();
  // }
  myAlbum.photos.forEach(function(photo){
    elAlbum.innerHTML += photo.toHTML();
  });
  console.log( myAlbum.listPhotos() );
});

// var photo1 = {
//   file: "img/space_tiger.jpg",
//   location: "New York"
// }