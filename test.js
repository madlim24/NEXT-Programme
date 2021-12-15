
Date.prototype.addHours = function(h) {
  this.setTime(this.getTime() + (h*60*60*1000));
  return this;
}

Date.prototype.minusMinutes = function(h) {
  this.setTime(this.getTime() - (h*60*1000));
  return this;
}

//console.log((new Date().addHours(4)));

for( i = 1; i <= 10; i++){
    //console.log(new Date().minusMinutes(i))
    console.log(typeof(new Date()));
    console.log(new Date());
}

//---------------------------------------------------//

//const url = "https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=1436029892,1436029902&units=miles"
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

let firstTime = true;

async function getISS() {
        const response = await fetch(api_url);
        const data = await response.json();
        const { latitude, longitude } = data;

        marker.setLatLng([latitude, longitude]);
        if (firstTime) {
          mymap.setView([latitude, longitude], 2);
          firstTime = false;
        }
        console.log(data);
      }

      getISS();
      setInterval(getISS, 1000);

//---------------------------------------------

      /*async function latlongAPI() {
        const axios = require('axios');
        var input1 = latitude;
        var input2 = longitude;
        var api = 'https://api.positionstack.com/v1/reverse';
        var apikey = '02ba8e2c6d1246c71db29c52c47e6c5e';
        var params = input1 + input2 + apikey;
      const params = {
        access_key: '02ba8e2c6d1246c71db29c52c47e6c5e',
        query: '1600 Pennsylvania Ave NW'
      }

      axios.get('https://api.positionstack.com/v1/reverse', {params})
        .then(response => {
          console.log(response.data);
        }).catch(error => {
          console.log(error);
        });

      }

      latlongAPI();*/

      //--------------------------------------------------------

      /*function myFunction() {

        var request;
        var input1 = latitude;
        var input2 = longitude;
        var api = 'https://api.positionstack.com/v1/reverse/';
        var access_key = '02ba8e2c6d1246c71db29c52c47e6c5e';
        var sum =  input1 + input2 ;

        request = new XMLHttpRequest();

        request.open('GET', api, access_key, sum, true);
        request.onload = function () {

            var data = JSON.parse(this.response);
            if (request.status >= 200 && request.status < 400) {
                console.log(data);
            } else {
                console.log(input1, input2);
            }
        }

        request.send();
    }*/

    //myFunction();