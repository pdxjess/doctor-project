import { Doctor } from './doctor.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('.submit').click(function() {
    let symptom = $('#symptoms').val();
    $('#symptoms').val("");
    $.ajax({
      url: ''
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
