---
layout: layout.hbs
---

# Features

## Feature: Text Chatrooms

``` gherkin
Feature: Text Chatrooms
  As a user of Code Together
  I want to be able to chat with my team
  So that I can collabarate

  Scenario: Enter a message
    Given I am logged into Code Together
    And Iam in a code project
    And I selected the chat message box
    When I type text in the chat window
    And I press enter
    Then the other users can see my message

  Scenario: Look Through Chat History
    Given I am logged into Code Together
    And Iam in a code project
    And I selected the chat message box
    When I scroll
    Then I should see past messages

  Scenario: Select a User
    Given I am logged into Code Together
    And Iam in a code project
    And I selected the chat message box
    When I select a user
    Then I should see their profile

  Scenario: I don't understand a function
    Given I have a question about a function
    When other users see my chat
    Then expirienced users can answer my question
```

## Feature: Login

``` gherkin
Feature: Login
  As a user
  I want to let other users see who I am and
  I want to get credit for my contribution and
  I want to get social valdiation.
  Scenario:
    Given that I am a new user
    When I want to contribute to a project
    I should be able to create an account.
```

## Feature: Video chat

``` gherkin
Feature: Video chat
  As a user of code together
  When I open up my project page
  I want to be able to chat with other 
  Scenario: Start a video chat
    Given that I start working on a project
    Then I should be able to invite people to the video chat
  Scenario: End a video chat
    Given that I am in a video chat
    Then I should be able to end the video chat
  Scenario: Mute a video chat
    Given that I am in a video chat
    Then I should be able to mute myself and others in the video chat
  Scenario: Invite others
    Given that I am in a video chat with other people
    Then I should be able to invite people not currently in the video chat into the video chat
  Scenario: 
    I want to stop sending video but not exit video chat. 
    I should be able to disable the video feed and start it again with ease 
```

## Feature: Collaborative coding

``` gherkin
Feature: Collaborative coding
  As a user i want to be able to present my code
  I want other users / partner to be able to edit my code
  Scenario: Working on a group project
    Given a team project and a group of people,
    When I want to make change
    Then I can make a change instantly.
  Scenario: Concurrent editing
    Given that other users are editing a file,
    When they make a change,
    Then the change should be shown to me.
  Scenario: Understanding code
    Given a file and a confusing function,
    When I ask somebody for help,
    I should be able to see their cursor.
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
