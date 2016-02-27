---
layout: layout.hbs
---

# Proposal

## Team Members

Dominic Tonozzo, Freerik Lohner, Russell Mehring, Jacob Reman  

## Ideation

These ideation questions are the same as before. Your answers should represent
the integration of creative ideas from every team member.

* What is the name of your app?

 Code Together

* What collaborative activity can people do together using your app?

Users can create apps and code with the help of their friends and teammates.

* What is the ideal number of concurrent users (must be at least 10 but no more than 40)?

 An ideal number of concurrent users would be around 15. More than this will cause   conflicts, unless the code base is huge. However, it is enough users that the full pain of typical team coding tools like code reviews and git start to show their weakenesses.

* What skills do people need in order to do this activity?

 Users must be able to user a web browser and keyboard. Hopefully, they will also have a microphone or webcam. This will let them code much more easily than current tools, with a mentor. Unlike conventional tools, like Unix and Vim, this will be very easy to learn, and social. Hopefully this will encourage more beginners, especially people who would otherwise not be interested in computer science.

* Is this activity for fun or for something practical?

This is going to be a practical tool at first, and targetted at users who have experienced the pain of coding with a group, using tools like Vim and Git. However, hopefully the tool will be so easy to use that beginners will start using it.

* How can a person see what everyone else is doing?

Users can see what others are doing by viewing their cursor, automatic running of tests to detect conflicting changes, and video communication. Users will be able to see when changes they make affect another user because we will run unit tests automatically, and show the results in the IDE.

* How can a person see the most recent result of everyone's collaborative effort?

Users can see other's activity in the cursor position log, and also can see all open chat rooms. Viewing the open chat rooms will let users get expert help when they need it.

* What can an admin see (i.e., God's mode)?

We will have a page that will list all user's cursor positions. This will let us anticipate conflicting changes, and avoid effort duplication.

## Contributions

For each person on the team, jot down a list of ideas credited to that person.
It's okay to credit multiple people for the same idea. The rationale of this
section of the proposal is to demonstrate that everyone on the team contributes
useful ideas.

* Dominic
  * Code together
* Jacob
  * Chat
  * Communal Shopping List
* Russ
  * Election system
* Frederik
  * Polling system

## Plan

A reasonable way to implement a functional prototype of your together app
is to build upon the service-matching app (i.e. uber). Discuss what additional
efforts may be required from your team to develop the together app.

* What existing components of the uber app your team can reuse?

Not very much. It would be really hard to use any our previous apps except maybe using the layout to get use started for a home page.

* What new components and features your team may need to build?

We will have to build a chat window, a dynamic list of coding tasks, a coding window. 

* What new skills your team will still need to acquire?

This is a pretty open ended question but we will have to look into realtime data and making updates on others webpages as well. There will also have to be some new containers that will have to be worked with.

## What's Next?

This is a preliminary proposal. Next week, your team will receive feedback and
will work on building a _mockup_ of this app. The week after that, your team
will start implementing the app.
