$(document).ready(function () {


    var topics = ['rottweiler', 'drums', 'album covers', 'coding', 'dessert', 'video games', 'pizza'];
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
            var imgURL1 = [response.data[0].images.fixed_width_still.url];
            var imgURL2 = [response.data[1].images.fixed_width_still.url];
            var imgURL3 = [response.data[2].images.fixed_width_still.url];
            var imgURL4 = [response.data[3].images.fixed_width_still.url];
            var imgURL5 = [response.data[4].images.fixed_width_still.url];
            var imgURL6 = [response.data[5].images.fixed_width_still.url];
            var imgURL7 = [response.data[6].images.fixed_width_still.url];
            var imgURL8 = [response.data[7].images.fixed_width_still.url];
            var imgURL9 = [response.data[8].images.fixed_width_still.url];
            var imgURL10 = [response.data[9].images.fixed_width_still.url];
            var image1 = $('<img>').attr('src', imgURL1);
            var image2 = $('<img>').attr('src', imgURL2);
            var image3 = $('<img>').attr('src', imgURL3);
            var image4 = $('<img>').attr('src', imgURL4);
            var image5 = $('<img>').attr('src', imgURL5);
            var image6 = $('<img>').attr('src', imgURL6);
            var image7 = $('<img>').attr('src', imgURL7);
            var image8 = $('<img>').attr('src', imgURL8);
            var image9 = $('<img>').attr('src', imgURL9);
            var image10 = $('<img>').attr('src', imgURL10);
            // create rating element and append to empty div
            var rating1 = response.data[0].rating;
            var rating2 = response.data[1].rating;
            var rating3 = response.data[2].rating;
            var rating4 = response.data[3].rating;
            var rating5 = response.data[4].rating;
            var rating6 = response.data[5].rating;
            var rating7 = response.data[6].rating;
            var rating8 = response.data[7].rating;
            var rating9 = response.data[8].rating;
            var rating10 = response.data[9].rating;
            var p1 = $('<p>').text('this gif is rated: ' + rating1);
            var p2 = $('<p>').text('this gif is rated: ' + rating2);
            var p3 = $('<p>').text('this gif is rated: ' + rating3);
            var p4 = $('<p>').text('this gif is rated: ' + rating4);
            var p5 = $('<p>').text('this gif is rated: ' + rating5);
            var p6 = $('<p>').text('this gif is rated: ' + rating6);
            var p7 = $('<p>').text('this gif is rated: ' + rating7);
            var p8 = $('<p>').text('this gif is rated: ' + rating8);
            var p9 = $('<p>').text('this gif is rated: ' + rating9);
            var p10 = $('<p>').text('this gif is rated: ' + rating10);
            // topicDiv.append(p1, p2);
            topicDiv.append(image1, p1, image2, p2,image3, p3, image4, p4, image5, p5,
                 image6, p6, image7, p7,  image8, p8, image9, p9, image10, p10);

            // prepend results to page element
            $('#gifDump').prepend(topicDiv);
        });

        //for the image use response.0.images.fixed_width_still.url
        // for the rating use response.data[].rating

    }


    function renderButtons() {
        console.log('my render button function is being read');
        $('#topicButtons').empty();
        // looping through the topic array to create buttons
        for (let i = 0; i < topics.length; i++) {
            var a = $('<button>');
            a.addClass('topic-btn')
            a.attr('data-name', topics[i]);
            a.text(topics[i]);
            $('#topicButtons').append(a);
        }
    }

    // reading the button click to run display function
    $(document).on('click', '.topic-btn', displayGiphy);

    renderButtons();

});