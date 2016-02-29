---
layout: layout.hbs
---

## Objectives

* High-fidelity prototype of your team's together app
* Real-time, concurrent user simulator
* Test-driven development
* Behavior-driven development

## Due

* Team
  * __Milestone (1)__: Wednesday @ 11:59pm, 3/2/2016 <span class="chip red">NEW</span>
  * __Milestone (2)__: Friday @ 11:59pm, 3/4/2016
  * __Milestone (3)__: Monday @ 3pm, 3/7/2016

## Actions / State Transformation Specification

Given the BBD description you came up with during the hackathon,
identify the key actions. Then, for each action, specify how the action would
transform the real-time state of your app. Use the template at
[`/apps/together/proposal/spec.md`](/apps/together/proposal/spec.html). This
specification will involve writing pseudo code.

## User Simulator

Build a worker script to simulate a large number of concurrent users performing
the various actions supported by your together app. Each action will trigger
operations to transform the data stored in Firebase. The worker script from the
previous Uber app can be a good skeleton code to build upon.

## Requirements

* __Milestone (1)__
  * [ ] Design the Firebase database structure
  * [ ] Write the actions / state transformation specification  
* __Milestone (2)__  
  * [ ] Develop the basic functions of the user simulator
    * [ ] Simulate user login / logout
    * [ ] Simulate multiple users    
* __Milestone (3)__  
  * [ ] Complete the user simulator
    * [ ] Simulate all the major actions specific to your application
  * [ ] Develop a high-fidelity prototype mockup of the main screen using mock data (this mockup
    is not connected with the database).

## Submission
* The Firebase database structure and action/state transform specification should be written in [`/apps/together/proposal/spec.md`](/apps/together/proposal/spec.html)
* The index page of your team's mockup should be at [`/apps/together/mockup-team/index.html`](/apps/together/mockup-team/index.html)
* The repo link to the user simulator, posted to [#demo](https://ucdd2016.slack.com/messages/demo/). The grader
will look at the code.
