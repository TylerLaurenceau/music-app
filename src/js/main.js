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
    for (var i = 0; i < songs.length; i++) {
        $(".content").append(`<div class = "art"><img src = "${songs[i].artwork_url}"/><div>
                                  <div class = "title">${songs[i].title}</div>`)
    }
    console.log(songs);
}
//______________________________________________________________________________
$('#searchButton').click(clicker);

function clicker(event) {
    event.preventDefault();
    var searchBar = $("#searchBar").val();
    test(searchBar, processSongs);
};
//______________________________________________________________________________


//$(".music").html(`<audio src="https://api.soundcloud.com/tracks/259021543/stream?client_id=${token}" controls></audio>`)
