$(document).ready(function () {
    $('#search').keyup(function () {
        $('#result').html('');
        var searchField = $('#search').val();
        var expression = new RegExp(searchField, 'i');
        $.getJSON('js/store.json', function (data) {
            $.each(data, function (key, value) {
                if (value.name.search(expression) != -1 || value.price.search(expression) != -1)

                {
                    $('#result').append('<li class="list-group-item"><img src=' + value.pic + ' height="60" width="60" class="img-search" /> ' + value.name + ' | <span>' + value.price + '</span></li>');
                }
            });
        })
    });
});