---
layout: layout.hbs
---

# Specification

# Data

Our app uses the following structure for the database backend:

* Group
  * Name
    * groupName
    * Activation key
    * schedule
      * Day1
        * Time1
          * place 
          * address
          * ...
    * messages
      * time:
        * userName:message
    * member (log in with FB)
      * User1Name
        * Name 
        * current status
    * canvas
      * bgimage
      * drawing
        * x:y
        * curTool
        * curColor
        * curSize
* User
  * Name
    * userName
    * status
    * groups
      * groupName 


# Actions

The major actions of our app are:
* Login/Logout
* Make Group
* Join Group
* Add Schedule
* Click on Map
* Draw on Canvas
* Post Message

## Action: (Draw on Canvas)



## Action: Make Group 
``` javascript
// given
WeTravel.Group is
{
  Group1:
    ...
}
WeTravel.User.Tommy is
{
  userName: Tommy
  status: online
}
//when
MakeGroup(Name='CS Grad Trip', Activation Code='123456')

//then
WeTravel.Group should be
{
  Group1:
    ...
  CS Grad Trip:
    GroupName: CS Grad Trip
    Activation key: 123456
    Message:
      currentTime: "Welcome to CS Grad Trip"
    member:
      username: Tommy (the person who make group)
      current status: online
    canvas
       bgimage
       drawing
         x:y
         curTool
         curColor
         curSize
}
WeTravel.User.Tommy should be
{
  userName: Tommy
  status: online
  groups:
    CS Grad Trip 
}
```

## Action: Join Group
``` javascript
// given
WeTravel.Group.CS Grad Trip is
{
  GroupName: CS Grad Trip
    Activation key: 123456
    Message:
      currentTime: "Welcome to CS Grad Trip"
    member:
      Tommy:
        username: Tommy 
        current status: online
    canvas
       bgimage
       drawing
         x:y
         curTool
         curColor
         curSize
}
WeTravel.User.David is
{
  userName: David (the person who want to join group)
  status: online
}
//when
Join Group(Name: 'CS Grad Trip', Activation key: '123456')

//then
WeTravel.Group.CS Grad Trip should be
{
  GroupName: CS Grad Trip
    Activation key: 123456
    Message:
      currentTime: "Welcome to CS Grad Trip"
    member:
      Tommy:
        username: Tommy 
        current status: online
      David(new member join group):
        username: David
        current status: online
    canvas
       bgimage
       drawing
         x:y
         curTool
         curColor
         curSize
}
WeTravel.User.David should be
{ 
  userName: David
  status: online
  groups:
    CS Grad Trip  
}
```
## Action: (TODO: name)

(TODO: cases)




(remove the example below before submission)

## Action: Post A Message (Example)

### case: post a message 'd'

``` javascript
// given
foo.bar.messages is
{
  '-cadsace': 'a',
  '-cadsacf': 'b',
  '-cadsacg': 'c'
}

// when
post_a_message(text = 'd')

// then
foo.bar.messages should be
{
  '-cadsace': 'a',
  '-cadsacf': 'b',
  '-cadsacg': 'c',
  '-cadsach': 'd',
}
```

### case: delete a message

``` javascript
// given
foo.bar.messages is
{
  '-cadsace': 'a',
  '-cadsacf': 'b',
  '-cadsacg': 'c'
}

// when
delete_a_message(id = '-cadsacg')

// then
foo.bar.messages should be
{
  '-cadsace': 'a',
  '-cadsacf': 'b'
}
```
