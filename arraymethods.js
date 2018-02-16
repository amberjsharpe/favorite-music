var songs = ["God's Plan", "Perfect", "Finesse", "Havana", "Rockstar", "New Rules", "Pray for Me", "Stir Fry", "Meant to Be", "Bad at Love"];

var artists = ["Drake", "Ed Sheeran", "Bruno Mars", "Camilla Cabello", "Post Malone", "Dua Lipa", "The Weeknd", "Migos", "Bebe Rexha", "Halsey"];

var albums = ["Scary Hours", "Divide", "24K Magic", "Crying in the Club", "Rockstar", "Wonderland", "Damn", "Culture II", "All Your Fault", "Hopeless Fountain Kingdom"];

// Create a display area on the page for each of the sections (songs, artists & albums)

var displaySongs = document.getElementById("fav-songs");
songs.forEach(function(song) {
    displaySongs.innerHTML += `<h4>${song}</h4>`;
})

var displayArtists = document.getElementById("fav-artists");
artists.forEach(function(artist) {
    displayArtists.innerHTML += `<h4>${artist}</h4>`;
})

var displayAlbums = document.getElementById("fav-albums");
albums.forEach(function(album) {
    displayAlbums.innerHTML += `<h4>${album}</h4>`;
})