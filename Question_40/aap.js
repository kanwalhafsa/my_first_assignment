"use strict";
// Question 40
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album('Artist 1', 'Title 1');
console.log(album1);
const album2 = make_album('Artist 2', 'Title 2');
console.log(album2);
const album3 = make_album('Artist 3', 'Title 3', 12);
console.log(album3);
