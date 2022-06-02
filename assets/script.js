// modal showup 
const rideModal = document.getElementById('rideModal')
rideModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget

    // Update the modal's destination

    const modalBodyInput1 = exampleModal.querySelector('#destination')
    modalBodyInput1.value = destination;
    getLocationData(destination);

    // Update the modal's start-point

    const modalBodyInput2 = exampleModal.querySelector('#start-point')
    modalBodyInput2.value = start - Point;
    getLocationData();
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

  getLocationData();

  function getLocationData(searchLocation);

  if (searchLocation === "") {
      //need to chnage the below alert as alerts not allowed for project
    alert("Please enter a valid address!")
} else {
 let requestUrl = "https://open.mapquestapi.com/geocoding/v1/address?key=hhrCIA8KyYUTDcwR5122SGvidu2ajGro&location=" + searchLocation;
}
getApi(requestUrl);

// //validation through canada post

Key = "YA99-KW37-DJ29-UH59";
SearchTerm = modalBodyInput1.value;

var url = 'http://ws1.postescanada-canadapost.ca/AddressComplete/Interactive/Find/v2.10/json3.ws';
var params = '';
    params += "&Key=" + encodeURIComponent(Key);
    params += "&SearchTerm=" + encodeURIComponent(SearchTerm);
    params += "&LastId=" + encodeURIComponent(LastId);
    params += "&SearchFor=" + encodeURIComponent(SearchFor);
    params += "&Country=" + encodeURIComponent(Country);
    params += "&LanguagePreference=" + encodeURIComponent(LanguagePreference);
    params += "&MaxSuggestions=" + encodeURIComponent(MaxSuggestions);
    params += "&MaxResults=" + encodeURIComponent(MaxResults);
var http = new XMLHttpRequest();
http.open('POST', url, true);
http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
http.onreadystatechange = function() {
  if(http.readyState == 4 && http.status == 200) {
      var response = JSON.parse(http.responseText);
      // Test for an error
      if (response.Items.length == 1 && typeof(response.Items[0].Error) != "undefined") {
        // Show the error message
        alert(response.Items[0].Description);
      }
      else {
        // Check if there were any items found
        if (response.Items.length == 0)
            alert("Sorry, there were no results");
        else {
            // PUT YOUR CODE HERE
            //FYI: The output is an array of key value pairs (e.g. response.Items[0].Id), the keys being:
            //Id
            //Text
            //Highlight
            //Cursor
            //Description
            //Next
        }
    }
  }
}
http.send(params);