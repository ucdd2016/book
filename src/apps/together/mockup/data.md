---
layout: layout.hbs
---

# Data Models

The data models for BombSquad have to be quite complex in order for client's to see real time changes. My plan is to first have two objects 'working' and 'done'. 'Player' objects will belong in both of these objects, players in working will be currently completing tasks while players in done will be on a waiting page, watching others complete the final tasks. Data will be read in real-time from the working object in order to display live task completion. Each player object will contain the attributes 'task1', 'task2', and 'task3' that will have randomly generated string values such as "Find the player with a blue circle and tell them to type '53' into the text field". Each task attribute will also have a boolean attribute 'completed' that will be set to false until their task is complete. Here is the tricky part, because sometimes a task will be completed on another players web page. In order to track this, once the second user types '53' and hits enter, a function will run that finds which player had this task. Then that task will have 'completed' set to true. 
