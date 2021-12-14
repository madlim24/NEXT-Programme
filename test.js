import fetch from 'node-fetch'
globalThis.fetch = fetch

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
    console.log(new Date().minusMinutes(i))
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