import { Doctor } from './doctor.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#submit').submit(function(event) {
    event.preventDefault();
    let condition = $('#condition').val();
    let docName = $('#docName').val();
    $('#condition').val("");
    $('#docName').val("");

    promise.then(function(response) {
      let body = JSON.parse(response);
      $('#condition').val("");
      $('#docName').val("");
      $('#result').append('<li>' + element + '</li>');
      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
