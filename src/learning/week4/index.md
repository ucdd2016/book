---
layout: layout.hbs
---

# Week 4

The main topic this week is [ReactJS](https://facebook.github.io/react/).

### Resources

* [ReactJS](https://facebook.github.io/react/)
  * [Quick Start without NPM](https://facebook.github.io/react/docs/getting-started.html#quick-start-without-npm)
  * [Displaying Data](https://facebook.github.io/react/docs/displaying-data.html)
  * [Tutorial](https://facebook.github.io/react/docs/tutorial.html)

### Discussion Questions

1. What is a _Virtual DOM_ and why?
2. What are the advantages of your team's ReactJS implementation of the parking
app or your own implementation of the resume app over the original implementation?

(In our next meeting, a team will be randomly chosen to answer each question.)

## Team Learning

### Objective

Rebuild some key functionalities of the parking app in ReactJS.

### Due

Friday @ 11:59pm, 2/4/2016

### Requirements

* [ ] The [_Team_](/apps/parking/react/components/team.js) component should be fully implemented.
* [ ] The [_Garage_](/apps/parking/react/components/garage.js) component should be fully implemented.
  * [ ] The [_Garage Title_](/apps/parking/react/components/garage-title.js) component should be fully implemented.
  * [ ] The [_Garage Spaces_](/apps/parking/react/components/garage-spaces.js) component should be fully implemented.
  * [ ] The [_Garage Rates_](/apps/parking/react/components/garage-rates.js) component should be fully implemented.
  * [ ] The [_Garage Hours_](/apps/parking/react/components/garage-hours.js) component should be fully implemented.
* [ ] The app should be reasonably pretty, as close to the styling / design of your team's original garage app as possible.

Hints:
* The data for the team homework is a static JSON file, to make it simpler for you. But
for the individual homework, you will have to deal with real-time Firebase data
as before.
* In JSX, use `className` instead of `class` when you assign a CSS label to an element.

## Individual Learning

### Objective

Rebuild some key functionalities of your personal resume app in ReactJS.

### Due

Sunday @ 11:59pm, 2/7/2016

### Requirements

* [ ] The [_About_](/apps/resume/react/components/about.js) component should be fully implemented.
  * [ ] Name
  * [ ] Profile photo
  * [ ] Major or degree information
  * [ ] Github link  
* [ ] The [_Skill List_](/apps/resume/react/components/skill-list.js) component should be fully implemented.
* [ ] The [_Task List_](/apps/resume/react/components/task-list.js) component should be fully implemented.
* [ ] The [_City List_](/apps/resume/react/components/city-list.js) component should be fully implemented.
* [ ] Data used to populate the skill list, task list, and city list should come from
appropriate Firebase locations.

### Submission

* __Commit/Push__ your source code to Github.
* __Deploy__ your resume app to Firebase
