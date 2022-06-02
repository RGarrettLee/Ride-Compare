// modal showup 
const rideModal = document.getElementById('rideModal')
rideModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget

})

//once checkPrice button is clicked, run fetch requests

let checkPriceButton = document.getElementById('checkPrice');
checkPriceButton.addEventListener('click', function(event) {

  //take destination from modal input

  const modalBodyInput1 = document.querySelector('#destination')
  const destination = modalBodyInput1.value;

  // Update the modal's origin

  const modalBodyInput2 = document.querySelector('#start-point')
  const startPoint = modalBodyInput2.value;

  let originLatLon = getLocationData(startPoint);

  let destinationLatLon = getLocationData(destination);

//call Lyft API using origin and destination data
//Call Uber API using origin and destination data

})

//define search term, identified by user in modal

function getApi(requestUrl) {
    fetch(requestUrl)
    .then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        let latlon = [data.results[0].locations[0].latLng.lat,data.results[0].locations[0].latLng.lng];
        //check if search matched address; if not, call returns the below latitude and longitude by default.
        //therefore if the below latitude and longitude are returned, there were no results for the search.
        if (latlon == [39.78373, -100.445882]) {
            //need to change the below alert as alerts not allowed for project
            alert("No results found for this address.")
            return;
        } else {
            console.log(latlon);
            return latlon;
        }
      } 
  )
  }
  })
  }



  function getLocationData(searchLocation) {

//   if (searchLocation === "") {
//       //need to chnage the below alert as alerts not allowed for project
//     alert("Please enter a valid address!")
// } else {
 let requestUrl = "https://open.mapquestapi.com/geocoding/v1/address?key=hhrCIA8KyYUTDcwR5122SGvidu2ajGro&location=" + searchLocation;
//}
getApi(requestUrl);

  }
