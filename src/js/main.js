import $ from 'jquery';
import token from "./token.js";


function test(data, callback) {
    $.ajax({
        url: `https://api.soundcloud.com/tracks?client_id=${token}`,
        dataType: "json",
        data: {
            q: data
        },
        success: callback
    })
};

//______________________________________________________________________________
function processSongs(songs) {
  $(".content").empty();
    console.log(songs)
    for (var i = 0; i < songs.length; i++) {
        $(".content").append(`<div class="song">
          <div class = "art"><img src = "${songs[i].artwork_url}"/></div>
          <div class = "url">${songs[i].stream_url}?client_id=${token}</div>
          <div class = "title">${songs[i].title}</div>
        </div>
        `)
    }
    $(".art").click(pictureClicker)
}
//______________________________________________________________________________
$("#searchButton").click(searchClicker);

function searchClicker(event) {
    event.preventDefault();
    var searchBar = $("#searchBar").val();
    test(searchBar, processSongs);
};
//______________________________________________________________________________
function pictureClicker(event) {
    var target = $(event.currentTarget).next(".url").html();
    console.log(target)
    playSong(target);
    console.log("working")
};
//______________________________________________________________________________
function playSong(target) {
    $(".music").html(`<audio src="${target}" controls></audio>`)
    //console.log(target);
};


//$(".music").html(`<audio src="https://api.soundcloud.com/tracks/259021543/stream?client_id=${token}" controls></audio>`)
