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

//Refreshes display
function refreshSongDisplay() {
    displaySongs.innerHTML = "";
    displaySongArray();
}

function refreshArtistDisplay() {
    displayArtists.innerHTML = "";
    displayArtistArray();
}

function refreshAlbumDisplay() {
    displayAlbums.innerHTML = "";
    displayAlbumArray();
}

// Songs as added
var songsAsAdded = [];

// On Submit click, add input text to arrays
function addNew() {
    // Add to arrays
    songs.push(songInput.value);
    artists.unshift(artistInput.value);
    albums.push(albumInput.value);

    // Refresh div
    refreshSongDisplay();
    refreshArtistDisplay();
    refreshAlbumDisplay();

    // Reset Input field
    songInput.value = "";
    artistInput.value = "";
    albumInput.value = "";

    // Copy array into other array
    songsAsAdded = songs.slice();
}

submitBtn.addEventListener("click", addNew);
// Button Functionality
var button1 = document.getElementById("button-1");
var button2 = document.getElementById("button-2");
var button3 = document.getElementById("button-3");
var button4 = document.getElementById("button-4");
var button5 = document.getElementById("button-5");
var button6 = document.getElementById("button-6");
var button7 = document.getElementById("button-7");
var button8 = document.getElementById("button-8");

// Output vertically descending alphabetically
function vertDescAlpha() {
    songs.sort().reverse();
    refreshSongDisplay();
}
button1.addEventListener("click", vertDescAlpha);

// Output vertically ascending alphabetically
function vertAscAlpha() {
    songs.sort();
    refreshSongDisplay();
}
button2.addEventListener("click", vertAscAlpha);

// Output vertically exactly as the data was added
function vertAsAdded() {
    displaySongs.innerHTML = "";
    songsAsAdded = songs.slice();
    songsAsAdded.forEach(function(song) {
        displaySongs.innerHTML += `<h4>${song}</h4>`;
    }); 
}
button3.addEventListener("click", vertAsAdded);

// Output vertically exactly as the data was added, inverted
function vertAsAddedInvert() {
    displaySongs.innerHTML = "";
    songsAsAdded = songs.slice();
    songsAsAdded.reverse().forEach(function(song) {
        displaySongs.innerHTML += `<h4>${song}</h4>`;
    }); 
}
button4.addEventListener("click", vertAsAddedInvert);

// Output horizontally descending alphabetically, separated by ","
function commaJoin() {
    displaySongs.innerHTML = songs.sort().reverse().join(", ");
    displayArtists.innerHTML = artists.sort().reverse().join(", ");
    displayAlbums.innerHTML = albums.sort().reverse().join(", ");
}

button5.addEventListener("click", commaJoin);

// Output horizontally ascending alphabetically, separated by ">>"
function arrowJoin() {
    displaySongs.innerHTML = songs.sort().join(">> ");
    displayArtists.innerHTML = artists.sort().join(">> ");
    displayAlbums.innerHTML = albums.sort().join(">> ");   
}

button6.addEventListener("click", arrowJoin);

// Output horizontally exactly as the data was added, separated by ":"
function asAddedColon() {
    displaySongs.innerHTML = songs.join(": ");
    displayArtists.innerHTML = artists.join(": ");
    displayAlbums.innerHTML = albums.join(": ");    
}

button7.addEventListener("click", asAddedColon);

// Horizontally, As Added, Inverted, '|'/

function asAddedInvertLine() {
    displaySongs.innerHTML = songs.join("| ");
    displayArtists.innerHTML = artists.join("| ");
    displayAlbums.innerHTML = albums.join("| ");   
}

button8.addEventListener("click", asAddedInvertLine);

