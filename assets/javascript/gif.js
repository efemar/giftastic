$(document).ready(function () {

    // Initial array of places
    var travelPlaces = ["Argentina", "Brazil", "Canada", "Costa Rica", "Colombia", "Chile", "Peru", "Uruguay", "Germany", "Scotland", "Ireland"]


    //Take each string from the array above and create buttons in the html output

    function createButtons() {

        $("#buttons-view").empty();

        for (var i = 0; i < travelPlaces.length; i++) {
            var a = $("<button>");
            a.attr("type", "button")
            a.addClass("place");
            a.addClass("btn btn-primary btn-sm");
            a.attr("data-place", travelPlaces[i]);
            a.text(travelPlaces[i]);
            $("#gifs").append(a);
        }

    }


    //The button needs to grab information from each of the topics from giphy and displaying 10 static non animated gof images 

    $("#add-gif").on("click", function (event) {
        event.preventDefault();

        var travelPlace = $("#gif-input").val().trim();

        travelPlaces.push(travelPlace);
    })

    createButtons();
        
    

    // Display the images on the page



    //Display lay-out: Rating (G, ) + metadata (title, tags, etc) 



    // Create a search field that allows users to add their own custom searches






    //Look at 07-firebase for button issue and clicks

})
