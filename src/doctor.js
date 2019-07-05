export class Doctor {
}

$(document).ready(function() {
  $('.submit').click(function() {
    let symptom = $('#symptoms').val();
    $('#symptoms').val("");
    $.ajax({
      url: 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=d082b6969186b4d21a05df3d7a15f143'
      ,
      type:'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('').text('');
        $('').text('');
      },
      }
    })
  })
});
