$(document).ready(function() {
    var flickrStr = "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=24662369@N07&format=json&nojsoncallback=1";
    var photos = [];
    var tags = [];

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

    // When user clicks on one of choices in the miscellaneous dropdown, sort by the choice
    $('#miscSort').change(function() {
        var selection = this.value;  // get selected value
        console.log(photos.length);

        // Sort by string (for title)
        if (selection == "title") {
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
        }
        document.getElementById('photoDiv').innerHTML = "";
        displayPhotos();
    });
    console.log(photos);

});