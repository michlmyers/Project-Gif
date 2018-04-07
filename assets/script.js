$(document).ready(function () {


    var topics = ['rottweiler', 'drums', 'records', 'fractals', 'album covers', 'coding', 'dessert', 'symmetry', 'video games', 'pizza'];
    // My api key =  T8BtFJivaeZt7qHxp2Qw17qsPXxyovkg

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

            for (var i = 0; i < response.data.length; i++) {
                var imgURL = response.data[i].images.fixed_width_still.url;
                var activeImgURL = response.data[i].images.fixed_width_downsampled.url;
                var image = $('<img>').attr({ src: imgURL, gifstate: 'still', gifanimate: activeImgURL, gifStill: imgURL, class: 'gif' });
                var rating = response.data[i].rating;
                var p = $('<p>').text('this gif is rated: ' + rating);
                topicDiv.append(image, p);
                console.log('this is my: ' + activeImgURL);
            }
            // prepend results to page element
            $('#gifDump').prepend(topicDiv);
        });
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

    // take user input and create a button
    $('#addInterest').on('click', function (event) {
        event.preventDefault();
        var topic = $('#user-input').val().trim();
        topics.push(topic);
        console.log("THese are the topics", topics);
        renderButtons();
    })

    $('#gifDump').on('click', '.gif', function () {
        console.log('this click is working');
        var state = $(this).attr('gifstate');

        if (state === 'still') {
            $(this).attr('src', $(this).attr('gifanimate'));
            $(this).attr('gifstate', 'animate');
        } else {
            $(this).attr('src', $(this).attr('gifStill'));
            $(this).attr('gifstate', 'still');
        }
    });


    renderButtons();

});