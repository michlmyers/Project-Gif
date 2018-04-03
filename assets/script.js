$(document).ready(function () {


var topics = ['rottweiler', 'drums', 'album covers','dessert', 'video games' ];

console.log('my js file is being read');



function renderButtons () {
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

renderButtons();

});