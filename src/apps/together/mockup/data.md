---
layout: layout.hbs
---

# Data Models

* schedule
* user
* group message

## schedule

* Each team will share a same firebase account to store the data.
* The structure of the firebase data is organized as Day-->Time-->Place, Address, Website, Transpotation, etc... from root to leaves. (Place, Address, Website, Transpotation are under same level)
* Everyone can add a new schedule by the popout modal. If the specify branch "Day" is already added, then push the Time-->Place, Address, Website, Transpotation, etc... to the "day" branch you specify. Else, create a new branch Day-->Time-->Place, Address, Website, Transpotation, etc... to the firebase root.
* Everyone can modify the data by clicking the modify button besides the Time, the modify data will push to the firebase, and there will have a record to record the last modifier.
* While someone is adding data by the modal form, his name will turn into red, while others are grey. 
* schedule
  * Day1
    * Time1
      * place 
      * address
      * ...
    * Time2
      * ...
  * Day2
  * ...

## user 

* only the users that invite by the group manager can have access to modify and check the site
* the manager invite and send an activation code to the user's email, and the user can use this code to log in .
* user branch contain the user name only
* a seperate branch to store the activation code.
* user
  * 0:name1
  * 1:name2
  * ...
* activation code:xxxxx

## group message

* another branch to store the chatting message
* username as key and store the time and message send by that user
* group message
  * userName1
    * Time1: message1
    * Time2: message2
    * ....
  * userName2
  	* Time1: message1
  	* ...