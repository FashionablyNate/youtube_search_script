/**
* Sample JavaScript code for youtube.search.list
* See instructions for running APIs Explorer code samples locally:
* https://developers.google.com/explorer-help/code-samples#javascript
*/

function loadClient() {
    gapi.client.setApiKey(apikey);
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
}

// Make sure the client is loaded before calling this method.
function execute() {
    if (!document.getElementById("search_term").value) {
        console.log("Please enter a search term.")
        return;
    }
    return gapi.client.youtube.search.list({
        "part": [
            "snippet"
        ],
        "maxResults": 100,
        "q": document.getElementById("search_term").value,
        "relevanceLanguage": document.getElementById("rel_lang").value,
        "videoCaption": "closedCaption",
        "location": document.getElementById("location").value,
        "locationRadius": document.getElementById("location_radius").value,
        "regionCode": document.getElementById("reg_code").value,
        "type": [
            "video,list"
        ]
    }).then(function(response) {
        // Handle the results here (response.result has the parsed body).
        for ( let i in response.result.items ) {
            execute_caption( response.result.items[i].id.videoId );
        }
    }, function(err) { console.error("Execute error", err); });
}

function execute_caption( videoId ) {
    return gapi.client.youtube.captions.list({
        "part": [
          "snippet"
        ],
        "videoId": videoId
    }).then(function(response) {
        // Handle the results here (response.result has the parsed body).
        for ( let i in response.result.items ) {
            if ( response.result.items[i].snippet.language == "en" ) {
                embed_video( videoId );
            }
        }
        // console.log("Response", response.result.items);
    }, function(err) { console.error("Execute error", err); });
}
gapi.load("client");


function embed_video( videoId ) {
    var makeIframe = document.createElement("iframe");
    makeIframe.setAttribute("src", "https://www.youtube.com/embed/" + videoId);
    makeIframe.setAttribute("scrolling", "yes");
    makeIframe.style.height = "270px";
    makeIframe.style.width = "480px";
    makeIframe.style.display = "block";
    makeIframe.style.margin = "0 auto";

    var makediv = document.createElement("div");
    var makebreak = document.createElement("br");
    
    makediv.appendChild(makeIframe);
    makediv.appendChild(makebreak);

    var getRef = document.getElementById("hi");
    var parentDiv = getRef.parentNode;
    parentDiv.insertBefore(makediv, getRef);
}