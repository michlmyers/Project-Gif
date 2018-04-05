$(document).ready(function () {


    var topics = ['rottweiler', 'drums', 'album covers', 'dessert', 'video games', 'pizza'];
    // My api key =  T8BtFJivaeZt7qHxp2Qw17qsPXxyovkg

    console.log('my js file is being read');

    function displayGiphy() {
        var addTopic = $(this).attr('data-name');
        var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + addTopic + '&api_key=T8BtFJivaeZt7qHxp2Qw17qsPXxyovkg&limit=10';

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {
            console.log(response);
            // create empty div for new gif / ratings to populate
            var topicDiv = $("<div class='topic'>");
            // create image element and append to empty div
            var imgURL = response.data[0].images.fixed_width_still.url;
            var image = $('<img>').attr('src', imgURL);
            topicDiv.append(image);
            // create rating element and append to empty div
            var rating = response.data[0].rating;
            var pOne = $('<p>').text('this gif is rated: ' + rating);
            topicDiv.append(pOne);

            // prepend results to page element
            $('#gifDump').prepend(topicDiv);
        });

        //for the image use response.0.images.fixed_width_still.url
        // for the rating use response.data[].rating

    }


    function renderButtons() {
        console.log('my render button function is being read');
        $('#topicButtons').empty();

        for (let i = 0; i < topics.length; i++) {
            var a = $('<button>');
            console.log(a);
            a.addClass('topic-btn')
            a.attr('data-name', topics[i]);
            a.text(topics[i]);
            $('#topicButtons').append(a);
        }
    }


    $(document).on('click', '.topic-btn', displayGiphy);

    renderButtons();

});