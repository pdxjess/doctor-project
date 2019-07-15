import { Doctor } from './doctor.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();
    let condition = $('#condition').val();
    let doctor = $('#name').val();
    $('#condition').val("");
    $('#name').val("");

    let betterDoctor = new Doctor();
    let promise = betterDoctor.doctorFinder(condition, doctor);

    promise.then(function (response) {
         let body = JSON.parse(response);

         if (body.data.length === 0) {
           $('#result').append('There are no doctors matching this search, please try again');
         }

         for (let i = 0; i < body.data.length; i++) {

           $('#result').append(`<strong>Name:</strong> ${body.data[i].profile.first_name} ${body.data[i].profile.last_name}<br>
           <strong>Address:</strong> ${body.data[i].practices[0].visit_address.street}<br>
           <strong>Number:</strong> ${body.data[i].practices[0].phones[0].number}<br>
           <strong>Website: </strong> ${body.data[i].practices[0].website} <br>
           <strong>Accepting New Patients:</strong> ${body.data[i].practices[0].accepts_new_patients}<br> <br> <hr>`);
         }
       }, function (error) {

         $('#result').text(`There was an error processing your request: ${error.message}`);
       });
     });

   });
