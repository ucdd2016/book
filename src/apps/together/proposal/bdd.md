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
Feature: Make Group
As the user of client
I want to open a new travel group
so that I can schedule the travel and invite others to the group

```

## Feature: My App's Feature 3

``` gherkin
Feature: Invite others
As the user of client 
I want to send invitations to others
so that they can join the travel scheduling app 

```

## Feature: My App's Feature 4

``` gherkin
Feature: Add schedule
As the user of client
I want to add schedule to our travel group 
so that the schedule will display on the list and the map 

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
