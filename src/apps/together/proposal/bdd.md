---
layout: layout.hbs
---

# Features

## Feature: My App's Feature 1

``` gherkin
Feature: Login
As the user of client
I want to login with Girhub to the travel page
so that I see the groups I am in and create a new group.

Scenario: wrong password
    Given I am on the user 
    When I have wrong log in password
    Then I should see "error" message


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

Scenario: invite a friend to join in
    Given the friend is not in this group 
    When I want to add his or her into the group
    Then I have to invite him or her to join in with his or her email address.

```

## Feature: My App's Feature 4

``` gherkin
Feature: Add schedule
As the user of client
I want to add schedule to our travel group 
so that the schedule will display on the list and the map 

Scenario 1: view schedule lists 
    When I want to know all my group schedule
    Then I can just go to the schedule lists page.

Scenario 2: add a schedule 
    When I want to add a new schedule of our trip.
    Then I can just add the schedule which includes duration, destination, budget and some other information.
```

## Feature: My App's Feature 5

``` gherkin
Feature: click on map and change location
As the user of client
I want to click on the map 
so that I can see the location on the map


```
## Feature: My App's Feature 6

``` gherkin
Feature: update canvas with map background
As the user of client
I want to screenshot a portion of the map
so that I use this screenshot as our canvas

Scenario 1: the canvas background is non-exist
    When I want to change the canvas background,
    Then I can just screenshop a map region and paste it to the canvs.
   
Scenario 2: the canvas background is exist
    When I want to change the canvas background,
    Then I can just screenshot a map region and update it to the canvas.

```
## Feature: My App's Feature 7

``` gherkin
Feature: chat with others
As the user of client
I want to chat with my group members in the chatting room
so everyone can exchange ideas with each others 
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
