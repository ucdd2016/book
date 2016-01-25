---
layout: layout.hbs
---

# Week 3

The main topic this week is building map-based apps backed by realtime data.

## Team Learning

### Teaming

We will make new teaming arrangements this week. Thank your current teammates
for their contributions during the past two weeks.  Say hello to your new teammates.

### Objective

Designing and building a parking app for the city of San Francisco.

### Resources

* [SF Parking Open Data Sets](https://www.firebase.com/docs/open-data/parking.html)
* [Leaflet](http://leafletjs.com/)
  * [Quick Start](http://leafletjs.com/examples/quick-start.html)
  * [Circle](http://leafletjs.com/reference.html#circle)
  * [Rectangle](http://leafletjs.com/reference.html#rectangle)
  * [LayerGroup](http://leafletjs.com/reference.html#layergroup)
  * [Leaflet Label Plugin](https://github.com/Leaflet/Leaflet.label)

### Due

Friday @ 11:59pm, 1/29/2016

### Requirements

* [ ] There should be a page providing a _list_ view of all the garages and
their current statuses ([garages.html](/apps/parking/garages.html)).
  * Nicely display and organize key information about each garage using
  a styling toolkit (e.g., [materializecss](http://materializecss.com/) or something similar).
* [ ] There should be a page providing a _map_ view of all the garage sand
their current statuses ([garages_map.html](/apps/parking/garages_map.html)).
  * Use a combination of the sizes, colors, and types of markers, and text labels to visualize
  important information such as the number of open parking spaces, cost ...etc.
* [ ] There should be an index page that serves as a landing page to these
two pages ([index.html](/apps/parking/index.html)).
* [ ] The information on these two pages should be updated / refreshed in realtime.

## Individual Learning

### Objective

Add a [My Favorite Cities](/apps/resume/cities.html) that will display the
weather of the five major US cities that are your favorites.

### Resources

* [Weather Open Data Sets](https://www.firebase.com/docs/open-data/weather.html)

### Due

Sunday @ 11:59pm, 1/31/2016

### Requirements

* [ ] On the __cities__ page ([cities.html](/apps/resume/cities.html)), show FIVE of your favorite cities' weather information.
* [ ] For each city, show the weather details of this city as an item inside
`<div id="cities">`. Provide as much useful weather information as possible. It must look nice.
* [ ] For each city, show a marker to indicate the location of this city on the
US map. Use colors, symbols, or sizes to visualize its current weather.
* [ ] The information on the __cities__ page should get refreshed automatically
in realtime when there's an update. Hint: You may need to add `markersLayerGroup.clearLayers()`
somewhere to clear all the markers before redrawing the markers.

### Submission

* __Commit/Push__ your source code to Github.
* __Deploy__ your resume app to Firebase
