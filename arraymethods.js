var songs = ["God's Plan", "Perfect", "Finesse", "Havana", "Rockstar", "New Rules", "Pray for Me", "Stir Fry", "Meant to Be", "Bad at Love"];

var artists = ["Drake", "Ed Sheeran", "Bruno Mars", "Camilla Cabello", "Post Malone", "Dua Lipa", "The Weeknd", "Migos", "Bebe Rexha", "Halsey"];

var albums = ["Scary Hours", "Divide", "24K Magic", "Crying in the Club", "Rockstar", "Wonderland", "Damn", "Culture II", "All Your Fault", "Hopeless Fountain Kingdom"];

// Create a display area on the page for each of the sections (songs, artists & albums)
var displaySongs = document.getElementById("fav-songs");
function displaySongArray() {
    songs.forEach(function(song) {
        displaySongs.innerHTML += `<h4>${song}</h4>`;
    });
}
displaySongArray(); //Call function

var displayArtists = document.getElementById("fav-artists");
function displayArtistArray() {
artists.forEach(function(artist) {
        displayArtists.innerHTML += `<h4>${artist}</h4>`;
    });
}
displayArtistArray(); //Call function

var displayAlbums = document.getElementById("fav-albums");
function displayAlbumArray() {
    albums.forEach(function(album) {
        displayAlbums.innerHTML += `<h4>${album}</h4>`;
    })
}
displayAlbumArray(); //Call function

// Submit Button and Input fields
var submitBtn = document.getElementById("submit-btn");
var resetBtn = document.getElementById("reset-input");
var songInput = document.getElementById("song-input");
var artistInput = document.getElementById("artist-input");
var albumInput = document.getElementById("album-input");

// On Submit click, add input text to arrays
function addNew() {
    // Add to arrays
    songs.unshift(songInput.value);
    console.log(songs);
    artists.push(artistInput.value);
    console.log(artists);
    albums.unshift(albumInput.value);
    console.log(albums);

    // Refresh div
    displaySongs.innerHTML = "";
    displaySongArray();

    displayArtists.innerHTML = "";
    displayArtistArray();

    displayAlbums.innerHTML = "";
    displayAlbumArray();

    // Reset Input field
    songInput.value = "";
    artistInput.value = "";
    albumInput.value = "";
}

submitBtn.addEventListener("click", addNew);
//resetBtn.addEventListener("click", resetInput);


