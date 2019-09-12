$(document).ready(function () {

    // Initial array of places
    var travelPlaces = ["Argentina", "Brazil", "Canada", "Costa Rica", "Colombia", "Chile", "Peru", "Uruguay", "Germany", "Scotland", "Ireland"]
    var travelPlace

    $("#add-gif").on("click", function (event) {
        event.preventDefault();

        //This grabs the value from the text box
        travelPlace = $("#gif-input").val().trim();

        //adding the place from the textbox to the existing array
        travelPlaces.push(travelPlace);

        createButtons();
    })

    // Function for dumping the JSON content for each button into the div

    function createButtons() {

        $("#buttons-view").empty();

        for (var i = 0; i < travelPlaces.length; i++) {
            var a = $("<button>");
            a.attr("type", "button")
            a.addClass("place");
            a.addClass("btn btn-primary btn-sm");
            a.attr("data-place", travelPlaces[i]);
            a.text(travelPlaces[i][0].toUpperCase() + travelPlaces[i].substr(1));
            $("#buttons-view").append(a);
        }

    }

    createButtons();


    function displayPlaceGif(travelPlace) {


        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=knpLJPTetvVyzRcKfITKxGEP3gebgMJE&q=" + travelPlace + "&limit=10&offset=0&rating=G&lang=en"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

        
            var img
            var newDivCard = $("<div class='card col-md-6'>")
           // var newDivCardBody = $("<div class='card-body'>")


            //loop over the array of response images
            for (var i = 0; i < response.data.length; i++) {
                var imageUrlStill = response.data[i].images.original_still.url
                var imageUrlAnimate = response.data[i].images.original.url
                var imageTitle = response.data[i].title
                var rating = response.data[i].rating


                console.log(response)

                //Create an image variagle and set the scr attribute
                img = $("<img>").attr("src", imageUrlStill).attr("data-still", imageUrlStill).attr("data-animate", imageUrlAnimate).attr("data-state", "still").attr("alt", imageTitle).attr("class", "gif img-thumbnail")
                rating = $("<p>").text("Rating: " + rating)
                title = $("<p>").text("Title: " + imageTitle)


                 newDivCard.append(img).append(title).append(rating)
            

                //console.log(img)
            }

            $("#gifs-view").empty().append(newDivCard)

        });

    }

    displayPlaceGif(travelPlace);

    
    $(document).on("click", ".place", function () {
        var travelPlace = $(this).attr("data-place")
        displayPlaceGif(travelPlace)
    })
    
    $(document).on("click", ".gif", function () {

        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }

    });

    createButtons();


})
