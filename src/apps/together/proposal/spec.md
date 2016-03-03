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
        * place 
        * budget
        * transpotation
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
MakeGroup(Name='CS_Grad_Trip', Activation Code='123456')

//then
WeTravel.Group should be
{
  Group1:
    ...
  CS_Grad_Trip:
    GroupName: CS_Grad_Trip
    Activation_key: 123456
    Message:
      currentTime: "Welcome to CS Grad Trip"
    member:
      username: Tommy (the person who make group)
      current_status: online
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
    CS_Grad_Trip 
}
```

## Action: Join Group
``` javascript
// given
WeTravel.Group.CS_Grad_Trip is
{
  GroupName: CS_Grad_Trip
    Activation_key: 123456
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
WeTravel.Group.CS_Grad_Trip should be
{
  GroupName: CS_Grad_Trip
    Activation_key: 123456
    Message:
      currentTime: "Welcome to CS Grad Trip"
    member:
      Tommy:
        username: Tommy 
        current_status: online
      David(new member join group):
        username: David
        current_status: online
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
    CS_Grad_Trip  
}
```


## Action: Add Schedule

### case: add a schedule for Day2='2016/3/12'

``` javascript
// given
WeTravel.CS_Grad_Trip.schedule is
{
    Day1:"2016/3/11" 
      place: "Paris"
        location: 48.8567° N, 2.3508° E
      budget: "$200"
      transpotation: "bus"
}
//when
Add_Schedule(Day2:'2016/3/12', place:"Rome", budget="$150", transpotation: "subway")

//then
WeTravel.CS_Grad_Trip.schedule should be
{
    Day1:"2016/3/11" 
      place: "Paris" 
        location: 48.8567° N, 2.3508° E      
      budget: "$200"
      transpotation: "bus"
    Day2:"2016/3/12" 
      place: "Rome"
        location: 41.9000° N, 12.5000° E
      budget: "$150"
      transpotation: "subway"        

}
```

### case: delete a schedule for Day2='2016/3/12'

``` javascript
// given
WeTravel.CS_Grad_Trip.schedule is
{
    Day1:"2016/3/11" 
      place: "Paris" 
        location: 48.8567° N, 2.3508° E      
      budget: "$200"
      transpotation: "bus"
    Day2:"2016/3/12" 
      place: "Rome"
        location: 41.9000° N, 12.5000° E
      budget: "$150"
      transpotation: "subway" 
}
//when
Delete_Schedule(Day2:'2016/3/12')

//then
WeTravel.CS_Grad_Trip.schedule should be
{
    Day1:"2016/3/11" 
      place: "Paris" 
        location: 48.8567° N, 2.3508° E      
      budget: "$200"
      transpotation: "bus"      
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
