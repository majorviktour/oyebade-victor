$(document).ready(function(){
  $('.dropdown-toggle').dropdown();
});

$(document).ready(function() {
  $('#sitelogo').click(function() {
    alert('Welcome to our restaurant');
    $('#del1').css('color', 'skyblue');
    $('#del2').css('color', 'red');
  });
});
$(document).ready(function() {
  $('input[type=checkbox]').change(function() {
    var subtotal = 0;
    $('input[name="food-option"]:checked').each(function() {
      subtotal += parseFloat($(this).val());
    });
    var vat = subtotal * 0.1;
    var total = subtotal + vat;
    $('#subtotal-amount').text('$' + subtotal.toFixed(2));
    $('#vat-amount').text('$' + vat.toFixed(2));
    $('#total-amount').text('$' + total.toFixed(2));
  });
});





