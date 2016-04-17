---
layout: layout.hbs
---

# Features

## Update: As a user I want to be able to update the musical score.

``` gherkin

* Scenario 1: I click on part of the score where I would like a note to be added. My note is one of the notes from the key. I select the quarter note and place it as the first note of the score. The score is updated with my new addition and it states who made the note.
* Scenario 2:  I click on part of the score where I would like a note to be added. My note is one of the notes from the key. I select a whole note try to place it as the middle of a 4/4 bar. The screen gives me an error. The score is not updated with my new addition because it was an illegal operation.
* Scenario 3: I click on part of the score where I would like a note to be added. There is already a note in that position and I wish to change it (someone else had placed the note there). There note disappears and my note is shown.
* Scenario 4: I click on a part of the score where I will to add a note, but someone else just added a note. My note will get updated and the previous data will be overwritten and my note will appear in the score. 

'''

## Interactability: As a user, I want to be able interact with collaborators through text so that all of us knows what to do.
''' gherkin
* Scenario 1: Have a chat box on the lower right side of the screen where all collaborators can chat and interact with each other.
* Scenario 2: Display the usernames of everyone within the chat room. Whenever someone types into the chat box, a user should be able to see who posted it.
* Scenario 3: Different groups of collaborators should have different chat rooms so that they don’t flood the chat box.
* Scenario 4: Users should be able to join in multiple chat rooms. This will allow them to collaborate on multiple projects.

'''

## Tempo: As a I user I want to be able to change the tempo or ‘beats per minute’ of the score and have it saved until another user changes it. 
''' gherkin
* Scenario 1: I want the notes to play faster or slower depending on my preference. 
* Scenario 2: I want to be able to see which user most recently changed the tempo.
* Scenario 3: I don’t want to have another user set the tempo to an outrageously high or low number, I would like there to be only a reasonable range to choose from.
* Scenario 4: I would like for a metronome to play while adjusting the tempo so I can get a good sense for the speed of the beat.

'''

## Login and Logout: As a user I want to login and logout when I click the options respectively.

''' gherkin

* Scenario 1: I click on the button to login, and the website keeps track of my user ID using my github. It is my Identifier in the chat and when I make edits.
* Scenario 2: When I close the window and come back to the webpage, I want to still be logged it without any input from my part.
* Scenario 3: When I press the logout toggle, I want my username and information to go away. 
* Scenario 4: When I press the logout, and close and come back to the webpage, I want to still be logged off. 


```


