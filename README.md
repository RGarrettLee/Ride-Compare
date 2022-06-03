# Ride Compare

### Have you ever found yourself comparing the same ride across multiple services? Look no further as **Ride Compare** is here to help you by comparing the same ride across multiple of the most popular ride sharing services to provide you with the best possible price. 

## User Story
```
AS A person who wants to go places
I WANT to find the best price available to me through Lyft or Uber
SO THAT I can spend the least amount of money on my trip
```

## Acceptance Criteria
```
GIVEN I am a user who wants to travel using a pickup service
WHEN I press the "Compare" button
THEN I am presented with a modal to enter my start and end destinations
THEN I am presented with the best price available after comparing Lyft and Uber's ride estimations
```

## Description of Application
```
The user is able to enter searches for start and end points for a trip, and the application will return the costs for the trip for the Uber and Lyft services.
The application also allows the user to save addresses for home and work locations to local storage, to be reused as necessary. Once the start location and 
destination are input and the compare button is clicked, the user is redirected to a page showing the results of the search comparing the two services.

```

## Technologies Used
```
The page uses CSS frameworks Bootstrap and Bulma.

The page fetches data from the third-party Mapquest API for the geocoding of addresses.
We encountered issues accessing Lyft's and Uber's APIs, as they are not publicly accessible. As such, we coded an API to retrieve the data from the Lyft and Uber website searches, sending in the geocoded data and retrieving costs for the route.


![Screenshot of home page](./images/screenshot-homepage.PNG)
![Screenshot of results page](./images/screenshot-homepage.PNG)
---

Deployed Page: https://rgarrettlee.github.io/Ride-Compare/
Repository Location: https://github.com/RGarrettLee/Ride-Compare
