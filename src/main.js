import { Doctor } from './doctor.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#resultSearch').submit(function(event) {
    event.preventDefault();
    let condition = $('#condition').val();
    let doctor = $('#doctor').val();
    $('#symptoms').val('');
    $('#doctor').val('');
    $('#result').append("<li>""</li>");
  })
});
