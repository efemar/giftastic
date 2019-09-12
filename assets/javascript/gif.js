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

            var imageUrl
            var imageTitle
            var img
            var newDiv = $("<div>")
            

            //loop over the array of response images
            for (var i = 0; i < response.data.length; i++) {
                var imageUrl = response.data[i].images.original.url
                var imageTitle = response.data[i].title
                var rating = response.data[i].rating
               

                console.log(response)

                //Create an image variagle and set the scr attribute
                img = $("<img>").attr("src", imageUrl).attr("alt", imageTitle).attr("class", "img-thumbnail")
                rating = $("<p>").text("Rating: " + response.data[i].rating)
                title = $("<p>").text("Title: " + response.data[i].title)


                newDiv.append(title).append(rating).append(img)

                //console.log(img)
            }

            $("#gifs-view").empty().append(newDiv)

        });

    }

    displayPlaceGif(travelPlace);



    // Click event listener to all elements with the class "place"
    $(document).on("click", ".place", function () {
        var travelPlace = $(this).attr("data-place")
        displayPlaceGif(travelPlace)
    })


    createButtons();


})
