export class Doctor {
  doctorFinder(doctor, condition) {
    return new Promise(function(resolve, reject){
      const apiKey = process.env.apiKey;
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${docName}&query=${condition}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apikey}`;
      request.onload = function() {
        if(this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
