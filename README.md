# Ride Compare

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

---

## Breakdown

> ### API's
- Uber (Ride Estimate)
- Lyft (Ride Estimate)
- Google Maps (or equivalent location API)


> ### Tasks
- Create page layout and css stylings
- Integrate Googla Maps API (or other location API) to get longitude and latitude of addresses
- Make a request to the Uber and Lyft API's to get ride estimates & compare both to provide best price