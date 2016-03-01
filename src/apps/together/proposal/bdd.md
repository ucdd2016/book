---
layout: layout.hbs
---

# Features

## Feature: My App's Feature 1

``` gherkin
Feature: Login
As the user of client
I want to login with Github to the travel page
so that I see the groups I am in and create a new group.

Scenario 1: the user has logged in
    When I log in,
    Then I can use all functionalities in the web page. 

Scenario 2: the user status has not logged in
    When I has not logged in,
    Then I can only view the web page and use limited functionalities. 

```

## Feature: My App's Feature 2

``` gherkin
Feature: Make a Group
As the user of client
I want to make a travel group
so that I can schedule the travel and invite others to the group

Scenario 1: the group is not exist
    Given the group is not exist 
    When I want to make the group
    Then I have to create the group and(or) invite others to join in.

Scenario 2: the group is exist
    Given the group is exist 
    When I want to join the group
    Then I have to enter the group with group name and password, and(or) invite others to join in.

```

## Feature: My App's Feature 3

``` gherkin
Feature: Invite others
As the user of client 
I want to send invitations to others
so that they can join the travel scheduling app 

Scenario 1: the friend has not joined in
    Given the friend is not in this group, 
    When I want to add his or her into the group,
    Then I have to invite him or her to join in with his or her email address.

Scenario 2: the friend has already joined in
    Given the friend is in this group, 
    When I want to add his or her into the group,
    Then an alert message is popped out "the friend is in the group chat".

```

## Feature: My App's Feature 4

``` gherkin
Feature: Add schedule
As the user of client
I want to schedule to our travel group 
so that the schedule will display on the list and the map 

Scenario 1: view schedule lists 
    When I want to know all schedule lists of my group,
    Then I can just go to the schedule lists page.

Scenario 2: add schedule
    When I want to add a new schedule of our trip.
    Then I can just add the schedule which includes duration, destination, budget and some other information.

Scenario 3: edit schedule
    When I want to change something in a existing schedule.
    Then I can just edit this schedule by clicking the "edit" button.
```

## Feature: My App's Feature 5

``` gherkin
Feature: click on map and change location
As the user of client
I want to click on the map 
so that I can change my location on the map

Scenario 1: the location I want is in the map view 
    When I want to change my current location,
    Then I can just need to click the location on the map.

Scenario 2: the location I want is not in the map view 
    When I want to change my current location,
    Then I can have to zoom the map and find an approximate area.
    Then I can click the location on the map.

```
## Feature: My App's Feature 6

``` gherkin
Feature: update canvas with map background
As the user of client
I want to change the canvas with my desired destination spots on the map,
so that I can use this canvas to plan and draw my routes.

Scenario 1: the canvas background is non-exist
    When I want to change the canvas background,
    Then I can just screenshop a map region and paste it to the canvas.
   
Scenario 2: the canvas background is exist
    When I want to change the canvas background,
    Then I can just screenshot a map region and update it to the canvas.

```

## Feature: My App's Feature 7

``` gherkin
Feature: draw routes on the canvas
As the user of client
I want to draw routes on the canvas,
so that I can discuss with my friends with our traval routes and plans. 

Scenario 1: draw routes
    When I want to draw routes with different colors and lines,
    Then I can just choose the different color pens provided.
   
Scenario 2: save routes
    When I and my friends finish drawing routes, 
    Then I can save it to our schedule list as a photo.

```

## Feature: My App's Feature 8

``` gherkin
Feature: chatting room 

As the user of client
I want to chat with my group members in the chatting room
so everyone can exchange ideas with each other

Scenario 1: open chatting room window
    When I want to open the chatting room and chat with friends,
    Then I can click the chatting room at the right bottom and the chatting room window will be unfolded.

Scenario 2: chat
    When I want to send message to my group members,
    Once I text the message, 
    Then I can click the "send" button and the message will be sent to the group chat.
    Then each of my group members could view my message in the chatting room.

Scenario 3: view chatting records
    Given that I am in the chatting room and want to view the historical records regarding with our travel,
    When I scroll up in the chatting room window, 
    Then I can view the all chatting records.

Scenario 4: close(fold) chatting room 
    When I want to close(fold) the chatting room and view the web page with more space,
    Then I can click the chatting room at the right bottom and the chatting room will be closed(folded).


```

# Examples

## Feature: Usage

``` gherkin
Feature: Usage
  As a user of Cucumber.js
  I want to have documentation on Cucumber
  So that I can concentrate on building awesome applications

  Scenario: Reading documentation
    Given I am on the Cucumber.js GitHub repository
    When I go to the README file
    Then I should see "Usage" as the page title
```

## Feature: Serve Coffee

``` gherkin
Feature: Serve coffee
  Coffee should not be served until paid for
  Coffee should not be served until the button has been pressed
  If there is no coffee left then money should be refunded

  Scenario: Buy last coffee
    Given there are 1 coffees left in the machine
    And I have deposited 1$
    When I press the coffee button
    Then I should be served a coffee

  Scenario: No more coffees
    Given there is no coffee left in the machine
    And I have deposited $1
    When I press the coffee button
    Then I should be refunded $1
```
