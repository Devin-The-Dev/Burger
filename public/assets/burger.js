$(function () {
    console.log('TEST', $('.eatburger'));
    $(document).on("click", ".eatburger", function () {
        console.log('got here');
        event.preventDefault();
        var id = $(this).data("burgerid");

        var newDevourState = {
            devoured: 1
        };
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {

                console.log("changed devoured to", newDevourState);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#bg").val().trim(), devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).done(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                // eslint-disable-next-line no-undef
                location.reload();
            }
        ).fail(
            function () {
                console.log('test');
            }
        );
    });

    $('.trashburger').on('click', function (event) {
        event.preventDefault();
        var id = $(this).data('id');
        $.ajax({
            type: 'DELETE',
            url: '/api/burgers/' + id
        }).then(location.reload());
    })
});