$(document).ready(function () {

    // Initial array of places
    var travelPlaces = ["Argentina", "Brazil", "Canada", "Costa Rica", "Colombia", "Chile", "Peru", "Uruguay", "Germany", "Scotland", "Ireland", ""]


    $("#submit-gif").on("click", function (event) {
        event.preventDefault();
        var searchGif = $("#inputgif").val();
        getGif(searchGif)

        console.log(getGif);


        // This function handles events where the search gifs button is clicked

        function getGif(searchGif) {

            var queryURL =
                "https://api.giphy.com/v1/gifs/" +
                searchGif +
                "?api_key=knpLJPTetvVyzRcKfITKxGEP3gebgMJE&q=&limit=10&offset=0&rating=G&lang=en";

            console.log(queryURL);

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                console.log(response)


            })

        }






        //Make a request with Ajax


        //Retrieve rating (PG, G, so on), title, tags, etc)



    })

})
        //Change status of gif from still to animate

        //Display data to the output div


















