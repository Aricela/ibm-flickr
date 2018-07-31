$(document).ready(function() {
    var apiKey = "a5e95177da353f58113fd60296e1d250";
    var nasaId = "24662369@N07";
    var flickrStr = "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=" + apiKey + "&user_id=" + nasaId + "&format=json&nojsoncallback=1";
    var photos = [];
    var photosMetadata = [];

    // Get photos
    $.get(flickrStr, function(data){
       fetchPhotos(data);
       console.log(photos.length);
       displayPhotos();
    });

    console.log(photos.length);

    // Take items from returned Flickr array and put them into local photos array
    function fetchPhotos(data) {
        var numPhotos = data.photos.photo.length;
        for (let i = 0; i < numPhotos; i++) {
            let photoObj = {
                id: data.photos.photo[i].id,
                owner: data.photos.photo[i].owner,
                secret: data.photos.photo[i].secret,
                server: data.photos.photo[i].server,
                farm: data.photos.photo[i].farm,
                title: data.photos.photo[i].title
            };
            getMetadata(photoObj);
            photos.push(photoObj);
        }
    }

    // How to display the photos
    function displayPhotos() {
        for (let i = 0; i < photos.length; i++) {
            let title = photos[i].title;
            let imgURL = 'https://farm' + photos[i].farm + '.staticflickr.com/' + photos[i].server + '/' + photos[i].id + '_' + photos[i].secret + '.jpg';
            $('#photoDiv').append('<img src = "' + imgURL + '" alt = "' + title + '" title = "' + title + '"><span>' + title +'</span>');
        }
    }

    // Get metadata for a photo
    function getMetadata(photoObj) {
        let infoStr = "https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=a5e95177da353f58113fd60296e1d250&photo_id=" + photoObj.id + "&format=json&nojsoncallback=1";
        $.get(infoStr, function(data) {
            photoObj["description"] = data.photo.description;
            photoObj["takenDate"] = data.photo.dates.taken;
            console.log("taken date " + typeof(photoObj["takenDate"]));
            photoObj["views"] = data.photo.views;
            console.log("views " + typeof(photoObj["views"]));
        });
    }

    // Sort by "Taken on" date (most recent first)
    // This gets its own function since it's used twice: once at page load, and then again
    // if user selects to sort by Most Recent First
    function mostRecentFirst(){
        photos.sort(function(a, b) {
            x = new Date(a.takenDate);
            y = new Date(b.takenDate);
            if (x > y) {return -1;}
            if (x < y) {return 1;}
            return 0;
        });
    }

    // When user clicks on one of choices in the miscellaneous dropdown, sort by the choice
    $('#miscSort').change(function() {
        var selection = this.value;  // get selected value
        console.log(photos.length);
        switch (selection) {
            default:
                // Sort by date (most recent first)
                photos.sort(function(a, b) {
                    x = new Date(a.takenDate);
                    y = new Date(b.takenDate);
                    if (x > y) {return -1;}
                    if (x < y) {return 1;}
                    return 0;
                });
                break;
            case "takenDateOld":
                photos.sort(function(a, b) {
                    x = new Date(a.takenDate);
                    y = new Date(b.takenDate);
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                });
                break;
            case "popularity":
                // Sort by views, in descending order
                photos.sort(function(a,b) {return b.views - a.views});
                break;
            case "title":
                // Sort by title string a-z
                console.log(photos);
                photos.sort(function(a, b) {
                    var x = a.title.toLowerCase();
                    var y = b.title.toLowerCase();
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                });
        }
        // Sort by string (for title)
        /*if (selection == "title") {
            console.log(photos);
            photos.sort(function(a, b) {
                var x = a.title.toLowerCase();
                var y = b.title.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
            console.log(photos);
        } else {
            console.log(selection);
        }*/

        // Empty photoDiv to prepare for sorted photos
        document.getElementById('photoDiv').innerHTML = "";

        // Show sorted photos
        displayPhotos();
    });
    console.log(photos);

});