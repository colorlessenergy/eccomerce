$('#my-size').change(function () {
    $('#my-button').data('item-custom2-value', $(this).val());
});


// input for quantity of item

$('#my-quantity').change(function () {
    $('#my-button').data('item-quantity', $(this).val());
});

$("#my-quantity").keyup(function (evt) {
    if (Number($("#my-quantity").val()) < 0 && $("#my-quantity").val() != ""){
      $("#my-quantity")[0].value = 1;
    }
});

$('.product__small').on('click', function (event) {
    var buttons = $('button');
    var img = this;
    buttons.map(function (ele) {

        if ($(this).data('item-name') === img.alt) {
            $(this).attr('id', 'my-button');
            $(this).addClass('active');
            console.log(img.src);

            $('#my-button').data('item-custom2-value', $("#my-size").val());
            $('#my-button').data('item-quantity', $("#my-quantity").val());


            $('#big-img').attr('src', img.src)
        } else {
            $(this).attr('id', '')
            $(this).removeClass('active');
        }
    });
})
