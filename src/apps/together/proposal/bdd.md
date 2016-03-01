---
layout: layout.hbs
---

# Features

## Feature: My App's Feature 1
BDD - Together

Feature: My App’s Feature 1 - Timestamp 
   Timestamps will be essential for our realtime voting platform
   We will timestamp all votes.

Scenario 1: Timestamp graph should not be shown until polling session is finished
Scenario 2: Every time a user changes their vote, a timestamp is given to this update.
Scenario 3: As users vote, graphs generate revealing voter timestamp statistics



Feature: My App’s Feature 2 - Generating the graph
   As a user of Polive
   I want to be able to see a graph displayed in realtime
   So that I can visually see my votes against others.

Scenario 1: Users and admin should be able to see all user’s votes according to when they were submitted.
Scenario 2: User votes and this is his first vote,
         Vote is registered and the graph is updated to reflect the new vote
Scenario 3: User votes 
         User now modifies the vote because he changed his mind
         The graph is updated again in order to reflect the modified vote.



Feature: My App’s Feature 3 - Real time polling
   As a user of Polive
   I want to be able to vote and see my vote reflected in the results in realtime
   So that I can see my vote against others.

Scenario 1: User should be able to change vote mid-polling session
Scenario 2: User’s vote can be influenced by peers
Scenario 3: If this is a one on one debate, a slidey bar can be used to show users opinion.




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
