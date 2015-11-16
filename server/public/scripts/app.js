var apikey = "ca5d63fdb921e2570069eb8267389c4a9260227a";
var baseUrl = "http://www.giantbomb.com/api";

// construct the uri with our apikey
var GamesSearchUrl = baseUrl + '/search/?api_key=' + apikey + '&format=jsonp';
var query = "Batman";

$(document).ready(function() {

    // send off the query
    $.ajax({
        url: GamesSearchUrl + '&query=' + encodeURI(query),
        dataType: "jsonp",
        crossDomain: true,
        jsonp: 'json_callback',
        success: searchCallback
    });


    // callback for when we get back the results
    function searchCallback(data) {
        console.log(data);
    }


});