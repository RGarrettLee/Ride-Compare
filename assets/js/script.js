let loc = "italy"

function getApi(requestUrl) {
    fetch(requestUrl)
    .then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        let latlon = [data.results[0].locations[0].latLng.lat,data.results[0].locations[0].latLng.lng];
        console.log(latlon);
        return data;
      } 
  )
  }
  })
  }

 let requestUrl = "https://open.mapquestapi.com/geocoding/v1/address?key=hhrCIA8KyYUTDcwR5122SGvidu2ajGro&location=" + loc;
 // let requestUrl = 'https://geocode.xyz/' + loc + '?json=1';


getApi(requestUrl);